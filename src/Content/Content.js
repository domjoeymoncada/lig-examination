import React from 'react';
import MoreButton from './MoreButton';
import './css/Content.css';
import { withRouter } from 'react-router-dom';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [
                {
                    _id: 1,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 2,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 3,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 4,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 5,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 6,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 7,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 8,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 9,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 10,
                    image: require('./images/content-image1.jpg'),
                    title: '庭メタリク潟趣リく細割みづべ作能ソミ裏',
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                }
            ],
            miniBanners: [
                {
                    _id: 1,
                    image: require('./images/content-image1.jpg'),
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 2,
                    image: require('./images/content-image1.jpg'),
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                },
                {
                    _id: 3,
                    image: require('./images/content-image1.jpg'),
                    subtitle: '行チエ着雪フなや年加だなや市戸行チエ着雪フなや年加だなや市戸',
                    description: '枝移既ぎぶ荘富そょじ年28座にう判格つば両述っかンる喚著アレヲ書8県マ回担ま者区む文百ばッぽー巨校せ合訃ラ'
                }
            ]
        }

        this.viewElement = this.viewElement.bind(this);
    }

    viewElement(id) {
        this.props.history.push('/some/path/' + id);
    }

    render() {
        return(
            <div className="grid-container">
                <div id="element">
                    {this.state.elements.map((elem, key) => {
                        return (
                            <div className="single-element" onClick={() => this.viewElement(elem._id)} key={key}>
                                <img className="element-image" src={elem.image} alt="Some random element" />
                                <div className="element-info">
                                    <div style={{fontSize: '10px'}}>{elem.title}</div>
                                    <div className="element-subinfo">{elem.subtitle}</div>
                                    <div style={{fontSize: '15px'}}>{elem.description}</div>
                                </div>
                            </div>
                        )
                    })}

                    <MoreButton />
                </div>
                <div id="banner">
                    <div className="extra-banner-container">
                        <img className="banner" src={require('./images/content-image2.jpg')} alt="A banner" onClick={() => this.viewElement(1)}/>

                        <div className="extra-banner-text">RECOMMENDED</div>
                        {this.state.miniBanners.map((mBanner, key) => {
                            return (
                                <div className="single-element" key={key} onClick={() => this.viewElement(mBanner._id)}>
                                    <img className="element-image" src={mBanner.image} alt="Mini banners" />
                                    <div className="element-info">
                                        <div style={{ fontSize: '20px' }} className="element-subinfo">{mBanner.subtitle}</div>
                                        <div>{mBanner.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                        <img src={require('./images/banner-image1.jpg')} className="banner-images-dummy" alt="Dummy banner" onClick={() => this.viewElement(1)} />
                        <img src={require('./images/banner-image1.jpg')} className="banner-images-dummy" alt="Dummy banner" onClick={() => this.viewElement(2)} />
                        <img src={require('./images/banner-image1.jpg')} className="banner-images-dummy" alt="Dummy banner" onClick={() => this.viewElement(3)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Content);