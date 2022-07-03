import './item.scss';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';


const Item = () => {
    return (
        <>
            <div className="items">
                {/* Guidelines*/}
                <div className="items-box">
                    <div className="items-circle">
                        <ArticleOutlinedIcon className="icons" />
                    </div>
                    <p className="title">Guidelines</p>
                    <p className="items-text">
                        This is community guideline is to help and manage the community to behave and have a healthy communication within our community.
                        These rules are here to make sure the community stays a place where people of all skill levels and backgrounds can flourish.
                    </p>
                    <a 
                        href="https://github.com/btdevcommunity/btn-community-guidelines" 
                        target="_blank" rel="noreferrer" className="items-link">
                        View Guidelines
                    </a>
                </div>
                {/* Documentation*/}
                <div className="items-box">
                    <div className="items-circle">
                        <FileCopyOutlinedIcon className="icons" />
                    </div>
                    <p className="title">Documentation</p>
                    <p className="items-text">
                        You can read all the documentation which is available at GitHub respository
                    </p>
                    <a 
                        href="https://github.com/btdevcommunity/documentation/blob/main/README.md" 
                        target="_blank" rel="noreferrer" className="items-link">
                        View Documentation
                    </a>
                </div>
                {/* Community*/}
                <div className="items-box">
                    <div className="items-circle">
                        <GroupOutlinedIcon className="icons" />
                    </div>
                    <p className="title">Community</p>
                    <p className="items-text">
                        To know more about the community you can read our white paper.
                    </p>
                    <a 
                        href="https://github.com/btdevcommunity/community-docs" 
                        target="_blank" rel="noreferrer" className="items-link">
                        Know More
                    </a>
                </div>
            </div>

            <div className="posts">
                <h1>Latest Posts</h1>
                <div className="post">
                    <div className="post-wraper">
                        <p className="post-title"> Post 1</p>
                        <p className="post-author">Article by Pema Dorji Sherpa - dd-mm-yy</p>
                        <p className="post-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis magnam ea vitae sequi 
                            esse officiis enim voluptatem provident sit, corporis sint nulla nostrum 
                            nisi nesciunt saepe sapiente odit officia repudiandae?
                        </p>
                        <a href="/" className="post-link">Continue Reading</a>
                    </div>
                </div>
                <div className="post">
                    <div className="post-wraper">
                        <p className="post-title"> Post 2</p>
                        <p className="post-author">Article by Pema Dorji Sherpa - dd-mm-yy</p>
                        <p className="post-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis magnam ea vitae sequi 
                            esse officiis enim voluptatem provident sit, corporis sint nulla nostrum 
                            nisi nesciunt saepe sapiente odit officia repudiandae?
                        </p>
                        <a href="/" className="post-link" >Continue Reading</a>
                    </div>
                </div>

                <div className="post-old-posts">
                    <div className="post-old-post">
                        <a href="/blog" className="post-old-post-link">Read Old Posts</a>
                    </div>
                </div>
                
            </div>
        </>
            
    );
}
export default Item;