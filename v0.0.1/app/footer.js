import React from 'react';
import axios from 'axios';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" id="join-us">
                <div className="content" style={{paddingTop: 0}}>
                    <div className="">
                        <p style={{paddingTop: '20px', textAlign: 'center'}}><a className="button" href="https://github.com/reactjs-id/reactjs-id.github.io#kontribusi">+ Ingin Kontribusi? Tambah Konten?</a></p>
                    </div>
                    <div className="copyright" style={{paddingTop: 0}}>
                        <ul>
                            <li>© 2016</li>
                            <li><a href="https://www.facebook.com/groups/442974152553174/">Komunitas ReactJS Indonesia</a></li>
                            <li>Dibangun dengan <a href="http://reactjs.com/" target="_blank">ReactJS</a>.</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;