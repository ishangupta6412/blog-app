import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft"> 
                <div className="topIcon">
                    <a className="topLeftIcon"><i className="fab fa-facebook-square "></i></a>                    
                    <a className="topLeftIcon"><i className="fab fa-twitter-square "></i></a>                   
                    <a className="topLeftIcon"><i className="fab fa-instagram-square "></i></a>
                    <a className="topLeftIcon"><i className="fab fa-linkedin "></i></a>         
                </div>
            </div>
            <div className="topCenter"> 
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight"> 
                <img className="topImg" src="https://images.pexels.com/photos/9718961/pexels-photo-9718961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""></img>
                <form> 
                
                    <span className="serachIcon">
                        <i className="fas fa-search">
                            {/* <input className="topSearch" type="text" placeholder="Search"/> */}
                        </i>
                    </span>
                
                </form>
            </div>
        </div>
    )
}
