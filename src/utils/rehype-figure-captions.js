function isElement(node, tagName) {
  return node?.type === "element" && node.tagName === tagName;
}

function hasOnlyWhitespaceText(nodes) {
  return nodes.every((node) => node.type === "text" && !node.value.trim());
}

function getCaptionSource(node) {
  if (isElement(node, "img")) {
    return typeof node.properties?.alt === "string" ? node.properties.alt.trim() : "";
  }

  if (isElement(node, "a") && Array.isArray(node.children) && node.children.length === 1 && isElement(node.children[0], "img")) {
    const image = node.children[0];
    return typeof image.properties?.alt === "string" ? image.properties.alt.trim() : "";
  }

  return "";
}

function transformNode(node) {
  if (!node || typeof node !== "object") return;

  if (Array.isArray(node.children)) {
    node.children = node.children.map((child) => {
      transformNode(child);

      if (!isElement(child, "p") || !Array.isArray(child.children)) {
        return child;
      }

      const meaningfulChildren = child.children.filter(
        (item) => !(item.type === "text" && !item.value.trim()),
      );

      if (meaningfulChildren.length !== 1) {
        return child;
      }

      const mediaNode = meaningfulChildren[0];
      const caption = getCaptionSource(mediaNode);

      if (!caption) {
        return child;
      }

      if (!hasOnlyWhitespaceText(child.children.filter((item) => item !== mediaNode))) {
        return child;
      }

      return {
        type: "element",
        tagName: "figure",
        properties: {
          className: ["content-image-figure"],
        },
        children: [
          mediaNode,
          {
            type: "element",
            tagName: "figcaption",
            properties: {
              className: ["content-image-caption"],
            },
            children: [
              {
                type: "text",
                value: caption,
              },
            ],
          },
        ],
      };
    });
  }
}

export function rehypeFigureCaptions() {
  return function rehypeFigureCaptionsTransformer(tree) {
    transformNode(tree);
  };
}
