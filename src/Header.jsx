import React, {useState} from "react";
function Header() {
  const judul = useState("ini dari state");
  const list= useState("4 Makanan Khas Indonesia");
  
      return (
        <div>
          <h2>Makananan Khas Indonesia</h2>
          <p>{list}</p>
          <p>{judul}</p>
        </div>
      );
    }
  export default Header;