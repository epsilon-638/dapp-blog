// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Post {
    uint256 numPost;
    
    constructor() {
        numPost = 0;    
    }
    
    mapping (uint256 => PostObject) public posts;
    mapping (address => Profile) public profiles;
    
    struct PostObject {
        address _address;
        string postBody;
        uint64 likes;
        uint64 dislikes;
        uint256 timestamp;
        uint256 postId;
    }
    
    event PostAppended(
        address _address,
        string postBody,
        uint64 likes,
        uint64 dislikes,
        uint256 timestamp,
        uint256 postId
    );
    
    
    struct Profile {
        bytes32 username;
        bytes32 bio;
        address[] following;
        address[] followers;
    }
    
    event ProfileAppended(
        bytes32 username,
        bytes32 bio,
        address[] following,
        address[] followers
    );
    
    event PostLiked(
        address likedBy,
        uint256 postId
    );
    
    event PostDisliked(
        address likedBy,
        uint256 postId
    );
    
    function appendPost(string memory postBody) public {
        posts[numPost] = PostObject(
                            address(msg.sender), 
                            postBody,
                            uint64(0),
                            uint64(0),
                            block.timestamp,
                            numPost
                        );
                        
        emit PostAppended(
                address(msg.sender), 
                postBody,
                uint64(0),
                uint64(0),
                block.timestamp,
                numPost
        );
        numPost++;
    }
    
    function addProfile(bytes32 username, bytes32 bio) public {
        address[] memory following;
        address[] memory followers;
        profiles[msg.sender] = Profile(username, bio, following, followers);
        emit ProfileAppended(username, bio, following, followers);
    }
    
    function likePost(uint64 id) public {
        posts[id].likes++;
        emit PostLiked(address(msg.sender), id);
    }
    
    function dislikePost(uint64 id) public {
        posts[id].dislikes--;
        emit PostDisliked(address(msg.sender), id);
    }
}
