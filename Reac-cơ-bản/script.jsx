// Cơ bản 
// const heading = React.createElement(
//     "h1",
//     {
//         className: "heading",
//         title: "My heading",
//         onClick: function(){
//             console.log("Click");
//         },
//     },
//     ["Hello World"]
// );


// const div = React.createElement("div",{
//     className: "container",
//     onMouseOver: function(){
//         console.log("Click container");
//     },
//     },
// );

// const p = React.createElement("p",{
//     className: "para",
//     onMouseOver: function(){
//         console.log("Click div");
//     },
//     },
// );



// const element = (
//     <div className="container">
//         <h1 className="heading"
//              title="My heading"
//              onClick={function()
//         console.log("Clicked");
//         }>Hello
//         </h1>
//         <p></p>
//     </div>
// );


// const element = (
//     <div className="container">
//         <h1
//         className="heading"
//         title="My heading"
//         onClick={function(){
//             console.log("Clicked");
//         }}>
//             Techmaster Vietnam - Khai giảng Lớp Lộ trình Web Fontend + React.JS cho người mới bắt đầu tháng 3/2022
//         </h1>
//         <p className="para">31 tháng 03, 2022 - 10 lượt xem</p>
//         <button className="button" style={{fontSize: "12px", margin:"0 5px"}}>Web frontend</button>
//         <button className="button" style={{fontSize: "12px", margin:"0 5px"}}>Lập trình web</button>
//         <p className="para">
//         Lập trình Web là công việc xây dựng, phát triển và bảo trì các trang web được lưu trữ trên internet. Một trang web đơn giản có thể được viết bằng ngôn ngữ HTML, CSS và chỉ chứa vài trăm dòng lệnh. Tuy nhiên đối với trang web lớn như Facebook có thể lên đến 60 triệu dòng lệnh để phát triển hoàn chỉnh trang web.
//         </p>

//         <p className="para">
//         Số lượng lập trình viên web chiếm số đông các lập trình viên hiện nay. Các ứng dụng trên máy tính hoặc điện thoại vẫn đang phát triển. Tuy nhiên các ứng dụng trên web còn được phát triển nhiều hơn.
//         </p>

//         <p className="para">
//         Với hầu hết các điện thoại hoặc máy tính bảng hiện nay đều kết nối với máy tính. Thì các ứng dụng đều có thể được chạy trên các trình duyệt web.
//         </p>

//         <p className="para">
//         Với 1 bộ giáo trình đã được xây dựng bài bản, cụ thể bám sát vào thực tế làm việc và liên tục được cập nhật những kiến thức mới nhất. TechMaster tự tiên có thể đào tạo và cung cấp nguồn nhân lực chất lượng để đưa ra thị trường. Và đặc biệt TechMaster có cam kết việc làm đối với các bạn học viên đạt đủ điều kiện đầu ra với cả hai hình thức đào tạo trực tiếp và học trực tuyến có tương tác.
//         </p>
//     </div>
// );

class Product extends React.Component {
    render() {
        return(
            <div className="Product-item">
                <div className="item-head">
                    <img src={this.props.img} alt={this.props.name} />
                </div>
                <div className="item-body">
            <h1 className="name-item">{this.props.name}
            </h1>
            <p className="price-item">{this.props.price}
            
            </p>
                </div>
            </div>
        );
    }
}

function Card(){
    return (
        <div className="Product-item">
            <div className="item-head">
                
            </div>
            <div className="item-body">
            <h1 className="name-item">
            </h1>
            </div>
            <div className="price-item">
            </div>
        </div>
    )
}
function App(){
    return (
        <div className="container">
            <Product 
            img="https://cf.shopee.vn/file/a980b17f9061ae1cc3073db425017710_tn"
            name="Hạt Xanh"
            price={4000}
            />
            <Product
             img="https://cf.shopee.vn/file/a980b17f9061ae1cc3073db425017710_tn"
             name="Hạt Xanh"
             price={4000}
            />

            <Card
            img="https://cf.shopee.vn/file/a01d01a58c4d04998a7c4bf140163419_tn"
            name="Pin"
            price={6000}
            />
            <Card
            img="https://cf.shopee.vn/file/a01d01a58c4d04998a7c4bf140163419_tn"
            name="Pin"
            price={6000}
            />
            <Card
            img="https://cf.shopee.vn/file/a01d01a58c4d04998a7c4bf140163419_tn"
            name="Pin"
            price={6000}
            />
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("app"));

