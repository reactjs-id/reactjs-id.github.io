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
    render() {
        return (
            <div className="hero-transition-manager">
                <section className="hero add show shown">
                    <div className="entrance-transition title-entrance show">
                        <h1 className="title">
                            <span className="word-animator">
                                <span className="word">berpikir.</span>
                                <span className="word">berbagi.</span>
                                <span className="word">belajar.</span>
                            </span>
                        </h1>
                    </div>
                    <div className="entrance-transition image-entrance show"><img src="img/logo.png" alt="" className="rimage" /></div>
                    <div className="blog-controls show">
                        <div className="blog-filter">
                            <div className="selected" style={{padding: 0}}>
                                <select ref="category" style={styles.select} onChange={this.props.onChange.bind(this)}>
                                    <option value="">Semua Kategori</option>
                                    {this.props.categories.map((item, i) => {
                                        return (
                                            <option key={i} value={item}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

export default Header;