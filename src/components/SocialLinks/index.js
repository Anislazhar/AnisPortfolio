import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/Anislazhar'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/anislazhar/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://t.me/AnisLazhar'}
                type={'telegram'}
            />
            <SocialLinks.Link
                url={'https://www.instagram.com/anislazhar_mrsnake/'}
                type={'instagram'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
