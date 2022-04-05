// const Input = (props) =>{
//     return (
        
//     );
// }








// class Product extends React.Component {
//     render() {
//         return(
//             <div className="Product-item">
//                 <div className="item-head">
//                     <h1 className="name-app">Tip Calculator</h1>
//                 </div>
//                 <div className="item-body">
//                 <p className="para">Bill amount</p>
//                     <label className="label" htmlFor="input">
//                         <i class="icon far fa-money-bill"></i>
//                             <input className="input" type="text" />
//                     </label>
                

//                 <p className="para">Number of guests</p>
//                 <label className="label" htmlFor="input">
//                         <i class="icon fas fa-user-friends"></i>
//                             <input className="input" type="text" />
//                     </label>

//                 <p className="para">Service Quanlity</p>
//                 <select className="custom-select">
//                   <option>Choose...</option>
//                   <option>30% - Outstanding</option>
//                   <option>20% Good</option>
//                   <option>15% It's OK</option>
//                   <option>10% Bad</option>
//                   <option>5% Terrible</option>
                  
//               </select>
//                 <div className="item-footer">
//                     <p style={{padding: "0 3px"}}>Tip</p> <p className="para">$12.34</p> <p style={{padding: "0 3px"}}>each person</p>
//                 </div>
//                 <button className="button">Calculate</button>
            
//                 </div>
//             </div>
//         );
//     }
// }

// function App(){
//     return (
//         <div className="Product-item">
//             <Product/>
//         </div>
//     );
// }

// ReactDOM.render(<App/>, document.getElementById("app"));


// const menu = [
//     { href: "/", label: "Homepage" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//     { href: "/products", label: "Products" },
//     { href: "/blogs", label: "Blog" },
//     { href: "/more", label: "More" },
// ];

// // const menu = menuItem.map(o, i) = (
// //    <menuItem key={i} value={o.value} text={o.text}/>
// // );

// const MenuItem = ({href, label}) => {
//     return(
//         <li className="item-menu">
//             <a href={href} className="menu-link">
//             {label}
//             </a>
//         </li>
//     );
// };

// const Menu = ({menu}) =>{
//     return(
//         <ul className="menu">
//             {menu.map( function(item){
//                 return (
//                     <MenuItem
//                         key={item.href}
//                         href={item.href}
//                         label={item.label}
//                     />
//                 );
//             })}
                
//         </ul>
//     );
// };

// const App = () =>{
//         return (
//             <div className="menu">
//                 <Menu menu={menu}/>
//             </div>
//         );
//     }

// ReactDOM.render(<App/>, document.getElementById("menu"));



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
      }
    ]


    const listItem = [
        
    ]

  const MenuItem = ({id, name, type, image}) => {
        return(
            <li className="item-menu">
                <a id={id}
                   name={name}
                   type={type}
                   className="menu-link">
                {image}
                </a>
            </li>
        );
    };


    const Menu = ({pokemons}) =>{
            return(
                <ul className="menu">
                    {pokemons.map( function(item){
                        return (
                            <MenuItem
                                key={item.image}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                image={item.image}
                            />
                        );
                    })}
                        
                </ul>
            );
        };

        const App = () =>{
                    return (
                        <div className="menu">
                            <Menu menu={menu}/>
                        </div>
                    );
                }
        
  ReactDOM.render(<App/>, document.getElementById("menu"));