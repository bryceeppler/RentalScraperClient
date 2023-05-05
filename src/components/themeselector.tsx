import { useEffect } from "react";
import { themeChange } from "theme-change";

type Props = object;

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default function ThemeSelector() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div>
      {/* using theme-change package and daisyUI themes, create a menu that drops down to display clickable themes */}
      <div className="dropdown-hover dropdown">
        <div tabIndex={0} className="">
          Theme
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box bg-base-100 w-52 p-2 shadow"
        >
          {themes.map((theme) => (
            <li key={theme}>
              <button data-set-theme={theme} className="cursor-pointer">
                {theme}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
