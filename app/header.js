import React from 'react';

var styles = {
    select: {
        appearance: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        width: '100%',
        padding: '0 20px',
        border: 'none',
        color: '#000',
        borderRadius: 0,
        background: '#fff'
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pendaftar: [],
        };
    }
    componentDidMount() {
        axios.get(`pendaftar.json`)
            .then(response => {
                this.setState({
                    pendaftar: response.data
                });
            });
    }
    render() {
        var pendaftar = [];
        for (var i = 1; i <= 70; i++) {
            pendaftar.push(i);
        }
        return (
            <div>
                <div className="hero-transition-manager">
                    <section className="hero add show shown">
                        <div className="entrance-transition title-entrance show">
                            <h1 className="title">
                                1st react.id Meetup
                            </h1>
                            <h3>
                                20 juni 2015 &bull; D'labs SMDV Jakarta &bull; 19.00
                            </h3>
                            <div className="center">
                                <a href="#pendaftar" className="btn">
                                    Lihat Pendaftar
                                </a>
                            </div>
                        </div>
                        <div className="entrance-transition image-entrance show"><img src="img/logo.png" alt="" className="rimage" /></div>
                        
                    </section>
                </div>
                <h3>Pendaftar</h3>
                <div className="hero-section-2" id="pendaftar">
                        {this.state.pendaftar.map((item, i) => {
                            return (
                                <div className="pendaftar-item" style={{width: '230px', margin: '10px', textAlign: 'center', flexDirection: 'row'}}>
                                    <a href={item.link} target="_blank">
                                        <image src={item.photo} alt="" style={{width: '32px', height: '32px'}}/>
                                        <div className="pendaftar-name">{item.name}</div>
                                    </a>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
};

export default Header;