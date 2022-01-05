import { useState } from "react";

const Menu = ({ menuItems }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      {menuItems.map((item) => {
        const { id, img, title, price, desc } = item;
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <h1>
              {title}
              <span> {price} </span>
            </h1>
            {readMore ? desc : `${desc.substring(0, 10)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
