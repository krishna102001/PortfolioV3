import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';
export default function Footer(){
    return(
        <div className="footer">
            <footer>
                <p>&copy; Copyrights Reserved {new Date().getFullYear()}. Made By <a href="https://www.github.com/krishna102001" target="_blank" style={{color:"#9EC8B9"}}>Krishna❤️</a> </p>
                <div className="social-app">
                    <a href="www.linkedin.com/in/krishna-kant-maurya-6b247920b" target="_blank" className="social--app"><LinkedInIcon ></LinkedInIcon></a>
                    <a href="https://twitter.com/Krishna2k21" target="_blank" className="social--app"><TwitterIcon></TwitterIcon></a>
                    <a href="https://leetcode.com/krishna102001" target="_blank" className="social--app"><CodeIcon></CodeIcon></a>
                </div>
            </footer>            
        </div>
    )
}