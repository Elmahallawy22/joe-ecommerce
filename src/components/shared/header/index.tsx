import MainHeader from "./main-header";
import MobNavigations from "./mob-navigations";
import NavCategories from "./nav-categories";
import TopHeader from "./top-header";

export default function Header() {
  return (
    <section className="space-y-0 md:space-y-1">
      {/* Top Header */}
      <TopHeader />
      {/* Main Header for logo , search , navigation links and mobile menu */}
      <MainHeader />
      {/* Navigation Categories */}
      <NavCategories />
      {/* Mobile Navigations */}
      <MobNavigations />
    </section>
  );
}
