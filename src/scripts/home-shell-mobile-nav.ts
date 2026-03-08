export function initHomeShellMobileNav() {
  const shell = document.querySelector("[data-home-shell-root]");
  const mobileNavDrawer = shell?.querySelector("[data-home-shell-mobile-nav]");
  if (!(mobileNavDrawer instanceof HTMLDetailsElement)) return;

  const mobileNavMedia = window.matchMedia("(min-width: 56.25rem)");

  const closeMobileNavDrawer = () => {
    if (mobileNavMedia.matches) return;
    mobileNavDrawer.open = false;
  };

  document.addEventListener("click", (event) => {
    if (mobileNavMedia.matches || !mobileNavDrawer.open) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (mobileNavDrawer.contains(target)) return;
    closeMobileNavDrawer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMobileNavDrawer();
  });

  mobileNavMedia.addEventListener("change", () => {
    if (mobileNavMedia.matches) {
      mobileNavDrawer.open = false;
    }
  });
}
