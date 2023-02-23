// what, where
//ReactDOM.render(<h1>Hello react!</h1>,document.getElementById("root"))

//ReactDOM.render(<p>Hello react!</p>,document.querySelector("div"))


// ul -> li -> li

ReactDOM.render(
    <ul>
        <li>React 1</li>
        <li>React 2</li>
    </ul>, document.getElementById("root")
)

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    )
}

function MainContent(){
    return(
        <h1 style={{}}>React ögreniyorum!</h1>
    ) 
}
// Kendi özel React componentinizi olusturun!
// "MainContent" olarak adlandırın ve basit bir
// "React'i öğreniyorum!" diyen h1 öğesi icersin.

// Daha sonra Navbar'ın altına ekleyin (bu
// aşağıdaki ReactDOM.render çağrısı içinde yapabilirsiniz)

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent/>
    </div>
    ,
    document.getElementById("root")
)

ReactDOM.render(
    <h1 className="header">Hello React!</h1>,
    document.getElementById("root")
)
/*
Challange - yukarıdaki kod satırını normal JS'de oluşturarak yeniden 
oluşturun ve div#root'umuza bir h1 ekleyin (innerHTML kullanmadan yapiniz).

- Yeni bir h1 öğesi oluşturun
- Basliga innerText verin
- class ismi olarak "header" sınıf adını verin
- ve son olarak div#root'un alt öğesi(child) olarak ekleyin
    
*/

const h1React = <h1 className="header" color="#fff">Hello React!</h1>;
console.log(h1React)
console.log(<MainContent type="contentBody" color="" background="#ffffff"/>)

const h1 =  document.createElement("h1")
h1.innerText = "Hello react, normal js!"
h1.className = "header"
document.getElementById("root").append(h1)
console.log(h1)

function Button(props){
    if(props.type == "link"){
        return(
            <a  href={props.href} style>Button link</a>
        )
    }
    if(props.type == "button"){
        return(
            <button className={props.className} style>Button</button>
        )
    }
}

<Button type="link" href="" className="button" />