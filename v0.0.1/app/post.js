import React from 'react';
import axios from 'axios';
import Header from './header';
import _ from 'underscore';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: [],
            currentCategory: null
        };
    }
    componentDidMount() {
        axios.get(`posts.json`)
            .then(response => {
                this.setState({
                    posts: response.data,
                    categories: _.uniq(response.data.map(item => item.category))
                });
            });
    }
    onCategoryChange(e) {
        this.setState({currentCategory: e.target.value});
    }
    render() {
        let {posts, categories, currentCategory} = this.state; 
        if (currentCategory) {
            posts = posts.filter(item => item.category === currentCategory);
        }
        return (
            <div>
                <Header categories={categories} onChange={this.onCategoryChange.bind(this)}/>
                <section className="blog-post-list">
                    {posts.map((item, i) => {
                        return (
                            <div key={i} className="blog-post-list-item blog-label-culture">
                                <a href={item.demo} className="post-image" target="_blank">
                                    <div style={{backgroundImage: `url(${item.picture})`}} className="rimage background-image">
                                        <img src={item.picture} alt={item.title} className="img" />
                                    </div>
                                </a>
                                <div className="details">
                                    <div className="blog-category-tag">{item.category}</div>
                                    <h2 className="title"><a href={item.demo} target="_blank">{item.title}</a></h2>
                                    <p className="meta">
                                        <a href={item.author && item.author.link} target="_blank">
                                            <span>Oleh </span><span>{item.author && item.author.name}</span>
                                        </a>
                                    </p>
                                    <div className="excerpt">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tail">
                                        {item.code ? 
                                            <a href={item.code} target="_blank">Code</a>
                                            : null}
                                        {item.demo ? 
                                            <a href={item.demo} target="_blank">Demo</a>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
        );
    }
}

export default Post;