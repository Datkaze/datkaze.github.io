
  const menu = [
    { href: "/", label: "Homepage" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blog" },
    { href: "/more", label: "More" },
];

function MenuItem(props) {
        return (
          <li>
            <a href={props.href}>{props.label}</a>
          </li>
        );
    }

const pokemons = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
  ];

  function Pokemon(props) {
        return (
          <li>
            <img src={props.image} name={props.name} />
            <div>
              <div>Name: {props.name}</div>
              <div>Type: {props.type}</div>
            </div>
          </li>
        );
      }

const App = () =>{
        return (
            <div>
                <ul className="menu-list">
                    {menu.map(({ href, label }) => (
                        <MenuItem key={href} href={href} label={label} />
                    ))}
                </ul>

                <ul className="pokemon-list">
                   {pokemons.map(({ id, name, type, image }) => (
                        <Pokemon key={id} name={name} type={type} image={image} />
                    ))}
                </ul>
            </div>
            
        );
    }
   
          
    ReactDOM.render(<App/>, document.getElementById("app"));