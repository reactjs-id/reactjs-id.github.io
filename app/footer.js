import React from 'react';
import axios from 'axios';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value;
        this.setState({message: null});
        axios.post(`https://reactjs-id.herokuapp.com/invite`, {
            email,
            channel: 'react-id',
            coc: 0
        }).then(response => {
            this.setState({message: `Wuut! silakan cek email ${email} :D`})
        }, err => {
            this.setState({message: err.data.msg})
        });
    }
    render() {
        let {message} = this.state;
        return (
            <footer className="footer" id="join-us">
                <div className="subscription">
                    <img style={{width: '80px', height: '80px', marginBottom: '10px'}} src="img/slack.png" alt=""/>
                    <h2>React-ID di Slack</h2>
                    <p>Masukkan email Anda untuk mendapatkan undangan dan berdiskusi di Slack.</p>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <label for="subscription-email" className="label">Masukkan email di sini...</label>
                        <input ref="email" id="slack-email" className="email" placeholder="Enter your email..." required="" />
                        <button className="submit" type="submit"><span className="submit-text">Dapatkan Undangan</span></button>
                    </form>
                    {message ?
                        <p>{message}</p>
                        : null}
                    
                </div>
                <div className="content" style={{paddingTop: 0}}>
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