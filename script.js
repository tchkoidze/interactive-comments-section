import data from "./data.json" assert { type: "json" };
console.log(data);

const deleteMainContainer = document.querySelector(".delete-main-container");
const deleteMessageBtns = document.querySelector(".delete-message-btns");
const noCancelBtn = document.querySelector(".no-cancel-btn");
const yesCancelBtn = document.querySelector(".yes-delete-btn");

data["comments"].map(showComment);

function showreply(textAreaValue, x = false) {
  const currentUserReplyBox = document.createElement("div");
  //repliesContainer.appendChild(user1Container);
  //document.body.appendChild(user1Container);
  ///document.body.insertBefore(user1Container, newComment);
  currentUserReplyBox.classList.add("user1-container");

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  currentUserReplyBox.appendChild(commentBox);
  // * comment header
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  commentBox.appendChild(commentHeader);
  //-add photo
  const avatar = document.createElement("img");
  avatar.classList.add("user1-avatar");
  avatar.src = "./images/avatars/image-juliusomo.png";
  /*avatar.setAttribute(
    "src",
    //data["comments"][1]["replies"][0]["user"]["image"]["webp"]
    respons["user"]["image"]["webp"]
  );*/

  commentHeader.appendChild(avatar);
  //- add name
  const user1Name = document.createElement("h3");
  user1Name.classList.add("user1-name");
  //user1Name.innerText=;
  const user1NameContent = document.createTextNode("juliusomo");
  user1Name.appendChild(user1NameContent);
  commentHeader.appendChild(user1Name);
  //
  const you = document.createElement("span");
  you.innerText = "you";
  you.classList.add("you");
  user1Name.appendChild(you);
  //add comment publish time
  const publishTime = document.createElement("p");
  publishTime.classList.add("publish-time");
  const publishTimeContent = document.createTextNode("now");
  publishTime.appendChild(publishTimeContent);
  commentHeader.appendChild(publishTime);
  //

  //

  const headerReply = document.createElement("div");
  headerReply.classList.add("header-reply");
  commentHeader.appendChild(headerReply);

  const upheaderDeleteBtn = document.createElement("button");
  upheaderDeleteBtn.classList.add("header-delete-btn");
  upheaderDeleteBtn.setAttribute("type", "button");
  headerReply.appendChild(upheaderDeleteBtn);
  makeDeleteIcon(upheaderDeleteBtn);
  //  **** delete comment***
  upheaderDeleteBtn.addEventListener("click", () => {
    console.log("good");
    deleteMainContainer.style.display = "flex";
    noCancelBtn.addEventListener("click", () => {
      deleteMainContainer.style.display = "none";
    });
    yesCancelBtn.addEventListener("click", () => {
      //document.body.removeChild(currentUserReplyBox);
      currentUserReplyBox.remove();
      deleteMainContainer.style.display = "none";
    });
  });
  const upheaderDeleteBtnTxt = document.createTextNode("Delete");
  upheaderDeleteBtn.appendChild(upheaderDeleteBtnTxt);

  const upheaderEditBtn = document.createElement("button");
  upheaderEditBtn.setAttribute("type", "button");
  upheaderEditBtn.classList.add("header-edit-btn");
  headerReply.appendChild(upheaderEditBtn);
  makeEditIcon(upheaderEditBtn);
  const upheaderEditBtnTxt = document.createTextNode("Edit");
  upheaderEditBtn.appendChild(upheaderEditBtnTxt);
  //add reply edit button
  upheaderEditBtn.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    //textArea.value = editText;
    textArea.value = commentTxt.innerText;
    commentBox.appendChild(textArea);
    commentBox.removeChild(commentTxt);
    const updateBtn = document.createElement("button");
    updateBtn.type = "button";
    updateBtn.classList.add("update");
    updateBtn.innerText = "UPDATE";
    commentBox.appendChild(updateBtn);
    updateBtn.addEventListener("click", () => {
      console.log(999);
      //commentTxt.innerText = commentsEditText.value;
      commentTxt.innerText = textArea.value;

      commentBox.appendChild(commentTxt);
      //commentBox.removeChild(commentsEditText);
      commentBox.removeChild(textArea);
      commentBox.removeChild(updateBtn);
    });
  });

  //

  // comment text
  const commentTxt = document.createElement("p");
  commentTxt.classList.add("comment-txt");
  commentBox.appendChild(commentTxt);

  //add text content
  //const txtContentUser1 = document.createTextNode(respons["content"]);
  const txtContentUser1 = document.createTextNode(textAreaValue);
  commentTxt.appendChild(txtContentUser1);

  // *interaction with comment
  const interactioncContainer = document.createElement("div");
  interactioncContainer.classList.add("interaction-container");
  currentUserReplyBox.appendChild(interactioncContainer);
  //-likes box
  const likesBox = document.createElement("div");
  likesBox.classList.add("likes-box");
  interactioncContainer.appendChild(likesBox);

  const addLikeBtn = document.createElement("img");
  addLikeBtn.classList.add("add-like-btn");
  addLikeBtn.setAttribute("src", "./images/icon-plus.svg");
  likesBox.appendChild(addLikeBtn);

  const likes = document.createElement("p");
  likes.classList.add("likes");
  const likesTxt = document.createTextNode(
    data["comments"][1]["replies"][0]["score"]
  );
  likes.appendChild(likesTxt);
  likesBox.appendChild(likes);

  const removeLikeBtn = document.createElement("img");
  removeLikeBtn.classList.add("remove-like-btn");
  removeLikeBtn.setAttribute("src", "./images/icon-minus.svg");
  likesBox.appendChild(removeLikeBtn);
  //create replty btn

  const footerReply = document.createElement("div");
  footerReply.classList.add("footer-reply");
  interactioncContainer.appendChild(footerReply);

  const headerDeleteBtn = document.createElement("button");
  headerDeleteBtn.classList.add("header-delete-btn");
  headerDeleteBtn.setAttribute("type", "button");
  footerReply.appendChild(headerDeleteBtn);
  makeDeleteIcon(headerDeleteBtn);

  //  **** delete comment***
  headerDeleteBtn.addEventListener("click", () => {
    console.log("good");
    deleteMainContainer.style.display = "flex";
    noCancelBtn.addEventListener("click", () => {
      deleteMainContainer.style.display = "none";
    });
    yesCancelBtn.addEventListener("click", () => {
      /*if (x == true) {
        repliesContainer.removeChild(currentUserReplyBox);
      }
      if (x == false) {
        document.body.removeChild(currentUserReplyBox);
      }*/
      //document.body.removeChild(currentUserReplyBox);
      currentUserReplyBox.remove();
      deleteMainContainer.style.display = "none";
    });
  });

  const headerDeleteBtnTxt = document.createTextNode("Delete");
  headerDeleteBtn.appendChild(headerDeleteBtnTxt);

  const headerEditBtn = document.createElement("button");
  headerEditBtn.setAttribute("type", "button");
  headerEditBtn.classList.add("header-edit-btn");
  footerReply.appendChild(headerEditBtn);
  makeEditIcon(headerEditBtn);
  const headerEditBtnTxt = document.createTextNode("Edit");
  headerEditBtn.appendChild(headerEditBtnTxt);
  //add reply eedit for mobile
  headerEditBtn.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    //textArea.value = editText;
    textArea.value = commentTxt.innerText;
    commentBox.appendChild(textArea);
    commentBox.removeChild(commentTxt);
    const updateBtn = document.createElement("button");
    updateBtn.type = "button";
    updateBtn.classList.add("update");
    updateBtn.innerText = "UPDATE";
    commentBox.appendChild(updateBtn);
    updateBtn.addEventListener("click", () => {
      console.log(999);
      //commentTxt.innerText = commentsEditText.value;
      commentTxt.innerText = textArea.value;

      commentBox.appendChild(commentTxt);
      //commentBox.removeChild(commentsEditText);
      commentBox.removeChild(textArea);
      commentBox.removeChild(updateBtn);
    });
  });

  return currentUserReplyBox;
}

function showComment(comment) {
  const user1Container = document.createElement("div");
  document.body.appendChild(user1Container);
  user1Container.classList.add("user1-container");

  const replycontainer = document.createElement("div");
  replycontainer.classList.add("reply-container");
  document.body.appendChild(replycontainer);

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  user1Container.appendChild(commentBox);
  // * comment header
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  commentBox.appendChild(commentHeader);
  //-add photo
  const avatar = document.createElement("img");
  avatar.classList.add("user1-avatar");
  avatar.setAttribute("src", comment["user"]["image"]["webp"]);

  commentHeader.appendChild(avatar);
  //- add name
  const user1Name = document.createElement("h3");
  user1Name.classList.add("user1-name");
  const user1NameContent = document.createTextNode(comment["user"]["username"]);
  user1Name.appendChild(user1NameContent);
  commentHeader.appendChild(user1Name);
  //add comment publish time
  const publishTime = document.createElement("p");
  publishTime.classList.add("publish-time");
  const publishTimeContent = document.createTextNode(comment["createdAt"]);
  publishTime.appendChild(publishTimeContent);
  commentHeader.appendChild(publishTime);
  //header reply
  const headerReply = document.createElement("div");
  headerReply.classList.add("header-reply");
  commentHeader.appendChild(headerReply);
  //
  const headerreplyBtn = document.createElement("button");
  headerreplyBtn.classList.add("reply-btn");
  headerreplyBtn.setAttribute("type", "button");

  //interactioncContainer.appendChild(replyBtn);
  headerReply.appendChild(headerreplyBtn);

  headerreplyBtn.addEventListener("click", (e) => {
    console.log(77);
    //replymake();
    const newComment = document.createElement("div");
    newComment.classList.add("new-comment");
    const currentUserimgDesktop = document.createElement("img");
    currentUserimgDesktop.classList.add("current-user-img-desktop");
    currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
    newComment.appendChild(currentUserimgDesktop);
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    textArea.placeholder = "Add a comment…";
    textArea.value = " ";
    newComment.appendChild(textArea);
    const sentBtnContainer = document.createElement("div");
    sentBtnContainer.classList.add("sent-btn-container");
    newComment.appendChild(sentBtnContainer);
    const currentUserimg = document.createElement("img");
    currentUserimg.src = "./images/avatars/image-juliusomo.png";
    sentBtnContainer.appendChild(currentUserimg);
    //document.body.appendChild(newComment);
    //document.body.insertBefore(newComment, user1Container);
    const replyButton = document.createElement("button");
    replyButton.type = "button";
    replyButton.addEventListener("click", (e) => {
      if (textArea.value.match(/\S/)) {
        console.log(textArea.value != " ");
        //comment();
        //showreply();
        document.body.insertBefore(showreply(textArea.value), replycontainer);
        textArea.value = " ";
        document.body.removeChild(newComment);
      }
      //e.target.style.backgroundColor = "red";
    });
    replyButton.classList.add("reply-button");
    replyButton.innerText = "REPLY";
    sentBtnContainer.appendChild(replyButton);
    document.body.insertBefore(newComment, replycontainer);
    //document.body.insertBefore(replymake(), replycontainer);
  });

  makeReplyIcon(headerreplyBtn);
  const headerreplyBtnTxt = document.createTextNode("Reply");
  headerreplyBtn.appendChild(headerreplyBtnTxt);
  //
  // comment text
  const commentTxt = document.createElement("p");
  commentTxt.classList.add("comment-txt");
  commentBox.appendChild(commentTxt);

  //add text content
  const txtContentUser1 = document.createTextNode(comment["content"]);
  commentTxt.appendChild(txtContentUser1);

  // *interaction with comment
  const interactioncContainer = document.createElement("div");
  interactioncContainer.classList.add("interaction-container");
  //commentBox.appendChild(interactioncContainer);
  user1Container.appendChild(interactioncContainer);
  //-likes box
  const likesBox = document.createElement("div");
  likesBox.classList.add("likes-box");
  interactioncContainer.appendChild(likesBox);

  const addLikeBtn = document.createElement("img");
  addLikeBtn.classList.add("add-like-btn");
  addLikeBtn.setAttribute("src", "./images/icon-plus.svg");
  likesBox.appendChild(addLikeBtn);

  const likes = document.createElement("p");
  likes.classList.add("likes");
  const likesTxt = document.createTextNode(comment["score"]);
  likes.appendChild(likesTxt);
  likesBox.appendChild(likes);

  const removeLikeBtn = document.createElement("img");
  removeLikeBtn.classList.add("remove-like-btn");
  removeLikeBtn.setAttribute("src", "./images/icon-minus.svg");
  likesBox.appendChild(removeLikeBtn);
  //reply btn
  const footerReply = document.createElement("div");
  footerReply.classList.add("footer-reply");
  interactioncContainer.appendChild(footerReply);

  const replyBtn = document.createElement("button");
  replyBtn.classList.add("reply-btn");
  replyBtn.setAttribute("type", "button");
  //interactioncContainer.appendChild(replyBtn);
  footerReply.appendChild(replyBtn);
  //reply btn for mobile
  replyBtn.addEventListener("click", (e) => {
    console.log(77);
    //replymake();
    const newComment = document.createElement("div");
    newComment.classList.add("new-comment");
    const currentUserimgDesktop = document.createElement("img");
    currentUserimgDesktop.classList.add("current-user-img-desktop");
    currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
    newComment.appendChild(currentUserimgDesktop);
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    textArea.placeholder = "Add a comment…";
    textArea.value = " ";
    newComment.appendChild(textArea);
    const sentBtnContainer = document.createElement("div");
    sentBtnContainer.classList.add("sent-btn-container");
    newComment.appendChild(sentBtnContainer);
    const currentUserimg = document.createElement("img");
    currentUserimg.src = "./images/avatars/image-juliusomo.png";
    sentBtnContainer.appendChild(currentUserimg);
    //document.body.appendChild(newComment);
    //document.body.insertBefore(newComment, user1Container);
    const replyButton = document.createElement("button");
    replyButton.type = "button";
    replyButton.addEventListener("click", (e) => {
      if (textArea.value.match(/\S/)) {
        console.log(textArea.value != " ");
        //comment();
        //showreply();
        document.body.insertBefore(showreply(textArea.value), replycontainer);
        textArea.value = " ";
        document.body.removeChild(newComment);
      }
      //e.target.style.backgroundColor = "red";
    });
    replyButton.classList.add("reply-button");
    replyButton.innerText = "REPLY";
    sentBtnContainer.appendChild(replyButton);
    document.body.insertBefore(newComment, replycontainer);
    //document.body.insertBefore(replymake(), replycontainer);
  });
  //
  makeReplyIcon(replyBtn);
  const replyBtnTxt = document.createTextNode("Reply");
  replyBtn.appendChild(replyBtnTxt);

  //return replycontainer;
}

//add replies
//replies main container

const repliesContainer = document.createElement("div");
repliesContainer.classList.add("replies-container");
document.body.appendChild(repliesContainer);
//add reply 1
data["comments"][1]["replies"].map(reply);
//reply();

//reply();
//add reply
function reply(respons) {
  const user1Container = document.createElement("div");
  repliesContainer.appendChild(user1Container);
  user1Container.classList.add("user1-container");

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  user1Container.appendChild(commentBox);
  // * comment header
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  commentBox.appendChild(commentHeader);
  //-add photo
  const avatar = document.createElement("img");
  avatar.classList.add("user1-avatar");
  avatar.setAttribute(
    "src",
    //data["comments"][1]["replies"][0]["user"]["image"]["webp"]
    respons["user"]["image"]["webp"]
  );

  commentHeader.appendChild(avatar);
  //- add name
  const user1Name = document.createElement("h3");
  user1Name.classList.add("user1-name");
  const user1NameContent = document.createTextNode(respons["user"]["username"]);
  user1Name.appendChild(user1NameContent);
  commentHeader.appendChild(user1Name);
  //add comment publish time
  const publishTime = document.createElement("p");
  publishTime.classList.add("publish-time");
  const publishTimeContent = document.createTextNode(respons["createdAt"]);
  publishTime.appendChild(publishTimeContent);
  commentHeader.appendChild(publishTime);
  //

  //
  if (respons["id"] == 3) {
    const headerReply = document.createElement("div");
    headerReply.classList.add("header-reply");
    commentHeader.appendChild(headerReply);
    //
    const headerreplyBtn = document.createElement("button");
    headerreplyBtn.classList.add("reply-btn");
    headerreplyBtn.setAttribute("type", "button");
    //interactioncContainer.appendChild(replyBtn);
    headerReply.appendChild(headerreplyBtn);
    headerreplyBtn.addEventListener("click", (e) => {
      console.log(77);
      //replymake();
      const newComment = document.createElement("div");
      newComment.classList.add("new-comment");
      const currentUserimgDesktop = document.createElement("img");
      currentUserimgDesktop.classList.add("current-user-img-desktop");
      currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
      newComment.appendChild(currentUserimgDesktop);
      const textArea = document.createElement("textarea");
      textArea.classList.add("text-area");
      textArea.placeholder = "Add a comment…";
      textArea.value = " ";
      newComment.appendChild(textArea);
      const sentBtnContainer = document.createElement("div");
      sentBtnContainer.classList.add("sent-btn-container");
      newComment.appendChild(sentBtnContainer);
      const currentUserimg = document.createElement("img");
      currentUserimg.src = "./images/avatars/image-juliusomo.png";
      sentBtnContainer.appendChild(currentUserimg);
      //document.body.appendChild(newComment);
      //document.body.insertBefore(newComment, user1Container);
      const replyButton = document.createElement("button");
      replyButton.type = "button";
      replyButton.addEventListener("click", (e) => {
        if (textArea.value.match(/\S/)) {
          console.log(textArea.value != " ");
          repliesContainer.appendChild(showreply(textArea.value));
          //repliesContainer.appendChild(showreply(textArea.value));
          textArea.value = " ";
          //document.body.removeChild(newComment);
          repliesContainer.removeChild(newComment);
        }
        //e.target.style.backgroundColor = "red";
      });
      replyButton.classList.add("reply-button");
      replyButton.innerText = "REPLY";
      sentBtnContainer.appendChild(replyButton);
      repliesContainer.appendChild(newComment);
      //document.body.insertBefore(replymake(), replycontainer);
    });
    makeReplyIcon(headerreplyBtn);
    const headerreplyBtnTxt = document.createTextNode("Reply");
    headerreplyBtn.appendChild(headerreplyBtnTxt);
  }
  if (respons["id"] == 4) {
    const headerReply = document.createElement("div");
    headerReply.classList.add("header-reply");
    commentHeader.appendChild(headerReply);

    const headerDeleteBtn = document.createElement("button");
    headerDeleteBtn.classList.add("header-delete-btn");
    headerDeleteBtn.setAttribute("type", "button");
    headerReply.appendChild(headerDeleteBtn);
    makeDeleteIcon(headerDeleteBtn);
    //  **** delete comment***
    headerDeleteBtn.addEventListener("click", () => {
      console.log("good");
      deleteMainContainer.style.display = "flex";
      noCancelBtn.addEventListener("click", () => {
        deleteMainContainer.style.display = "none";
      });
      yesCancelBtn.addEventListener("click", () => {
        //repliesContainer.removeChild(user1Container);
        user1Container.remove();
        deleteMainContainer.style.display = "none";
      });
    });
    const headerDeleteBtnTxt = document.createTextNode("Delete");
    headerDeleteBtn.appendChild(headerDeleteBtnTxt);

    const headerEditBtn = document.createElement("button");
    headerEditBtn.setAttribute("type", "button");
    headerEditBtn.classList.add("header-edit-btn");
    headerReply.appendChild(headerEditBtn);
    makeEditIcon(headerEditBtn);
    //edit reply function for desktop
    headerEditBtn.addEventListener("click", () => {
      const textArea = document.createElement("textarea");
      textArea.classList.add("text-area");
      //textArea.value = editText;
      textArea.value = commentTxt.innerText;
      commentBox.appendChild(textArea);
      commentBox.removeChild(commentTxt);
      const updateBtn = document.createElement("button");
      updateBtn.type = "button";
      updateBtn.classList.add("update");
      updateBtn.innerText = "UPDATE";
      commentBox.appendChild(updateBtn);
      updateBtn.addEventListener("click", () => {
        console.log(999);
        //commentTxt.innerText = commentsEditText.value;
        commentTxt.innerText = textArea.value;
        commentBox.appendChild(commentTxt);
        //commentBox.removeChild(commentsEditText);
        commentBox.removeChild(textArea);
        commentBox.removeChild(updateBtn);
      });
    });

    const headerEditBtnTxt = document.createTextNode("Edit");
    headerEditBtn.appendChild(headerEditBtnTxt);
  }
  //

  // comment text
  const commentTxt = document.createElement("p");
  commentTxt.classList.add("comment-txt");
  commentBox.appendChild(commentTxt);

  //add text content
  const txtContentUser1 = document.createTextNode(respons["content"]);
  commentTxt.appendChild(txtContentUser1);

  // *interaction with comment
  const interactioncContainer = document.createElement("div");
  interactioncContainer.classList.add("interaction-container");
  user1Container.appendChild(interactioncContainer);
  //-likes box
  const likesBox = document.createElement("div");
  likesBox.classList.add("likes-box");
  interactioncContainer.appendChild(likesBox);

  const addLikeBtn = document.createElement("img");
  addLikeBtn.classList.add("add-like-btn");
  addLikeBtn.setAttribute("src", "./images/icon-plus.svg");
  likesBox.appendChild(addLikeBtn);

  const likes = document.createElement("p");
  likes.classList.add("likes");
  const likesTxt = document.createTextNode(
    data["comments"][1]["replies"][0]["score"]
  );
  likes.appendChild(likesTxt);
  likesBox.appendChild(likes);

  const removeLikeBtn = document.createElement("img");
  removeLikeBtn.classList.add("remove-like-btn");
  removeLikeBtn.setAttribute("src", "./images/icon-minus.svg");
  likesBox.appendChild(removeLikeBtn);
  //create replty btn
  if (respons["id"] == 3) {
    const footerReply = document.createElement("div");
    footerReply.classList.add("footer-reply");
    interactioncContainer.appendChild(footerReply);

    const replyBtn = document.createElement("button");
    replyBtn.classList.add("reply-btn");
    replyBtn.setAttribute("type", "button");
    //interactioncContainer.appendChild(replyBtn);
    footerReply.appendChild(replyBtn);
    //reply btn for mobile
    replyBtn.addEventListener("click", (e) => {
      console.log(77);
      //replymake();
      const newComment = document.createElement("div");
      newComment.classList.add("new-comment");
      const currentUserimgDesktop = document.createElement("img");
      currentUserimgDesktop.classList.add("current-user-img-desktop");
      currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
      newComment.appendChild(currentUserimgDesktop);
      const textArea = document.createElement("textarea");
      textArea.classList.add("text-area");
      textArea.placeholder = "Add a comment…";
      textArea.value = " ";
      newComment.appendChild(textArea);
      const sentBtnContainer = document.createElement("div");
      sentBtnContainer.classList.add("sent-btn-container");
      newComment.appendChild(sentBtnContainer);
      const currentUserimg = document.createElement("img");
      currentUserimg.src = "./images/avatars/image-juliusomo.png";
      sentBtnContainer.appendChild(currentUserimg);
      //document.body.appendChild(newComment);
      //document.body.insertBefore(newComment, user1Container);
      const replyButton = document.createElement("button");
      replyButton.type = "button";
      replyButton.addEventListener("click", (e) => {
        if (textArea.value.match(/\S/)) {
          console.log(textArea.value != " ");
          repliesContainer.appendChild(showreply(textArea.value));
          //repliesContainer.appendChild(showreply(textArea.value));
          textArea.value = " ";
          //document.body.removeChild(newComment);
          repliesContainer.removeChild(newComment);
        }
        //e.target.style.backgroundColor = "red";
      });
      replyButton.classList.add("reply-button");
      replyButton.innerText = "REPLY";
      sentBtnContainer.appendChild(replyButton);
      repliesContainer.appendChild(newComment);
      //document.body.insertBefore(replymake(), replycontainer);
    });
    makeReplyIcon(replyBtn);
    const replyBtnTxt = document.createTextNode("Reply");
    replyBtn.appendChild(replyBtnTxt);
  }

  if (respons["id"] == 4) {
    const footerReply = document.createElement("div");
    footerReply.classList.add("footer-reply");
    interactioncContainer.appendChild(footerReply);

    const headerDeleteBtn = document.createElement("button");
    headerDeleteBtn.classList.add("header-delete-btn");
    headerDeleteBtn.setAttribute("type", "button");
    footerReply.appendChild(headerDeleteBtn);
    makeDeleteIcon(headerDeleteBtn);
    //  **** delete comment***
    headerDeleteBtn.addEventListener("click", () => {
      console.log("good");
      deleteMainContainer.style.display = "flex";
      noCancelBtn.addEventListener("click", () => {
        deleteMainContainer.style.display = "none";
      });
      yesCancelBtn.addEventListener("click", () => {
        repliesContainer.removeChild(user1Container);
        deleteMainContainer.style.display = "none";
      });
    });
    const headerDeleteBtnTxt = document.createTextNode("Delete");
    headerDeleteBtn.appendChild(headerDeleteBtnTxt);

    const headerEditBtn = document.createElement("button");
    headerEditBtn.setAttribute("type", "button");
    headerEditBtn.classList.add("header-edit-btn");
    footerReply.appendChild(headerEditBtn);
    makeEditIcon(headerEditBtn);
    //edit repy function for mobil
    headerEditBtn.addEventListener("click", () => {
      const textArea = document.createElement("textarea");
      textArea.classList.add("text-area");
      //textArea.value = editText;
      textArea.value = commentTxt.innerText;
      commentBox.appendChild(textArea);
      commentBox.removeChild(commentTxt);
      const updateBtn = document.createElement("button");
      updateBtn.type = "button";
      updateBtn.classList.add("update");
      updateBtn.innerText = "UPDATE";
      commentBox.appendChild(updateBtn);
      updateBtn.addEventListener("click", () => {
        console.log(999);
        commentTxt.innerText = textArea.value;
        commentBox.appendChild(commentTxt);

        commentBox.removeChild(textArea);
        commentBox.removeChild(updateBtn);
      });
    });
    //
    const headerEditBtnTxt = document.createTextNode("Edit");
    headerEditBtn.appendChild(headerEditBtnTxt);
  }
}
//coll to makeReplyBtn() function

//create new comment creator function
const newComment = document.createElement("div");
newComment.classList.add("new-comment");
const currentUserimgDesktop = document.createElement("img");
currentUserimgDesktop.classList.add("current-user-img-desktop");
currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
newComment.appendChild(currentUserimgDesktop);
const textArea = document.createElement("textarea");
textArea.classList.add("text-area");
textArea.placeholder = "Add a comment…";
textArea.value = " ";
newComment.appendChild(textArea);
const sentBtnContainer = document.createElement("div");
sentBtnContainer.classList.add("sent-btn-container");
newComment.appendChild(sentBtnContainer);
const currentUserimg = document.createElement("img");
currentUserimg.src = "./images/avatars/image-juliusomo.png";
sentBtnContainer.appendChild(currentUserimg);
document.body.appendChild(newComment);
const sendButton = document.createElement("button");
sendButton.type = "button";
sendButton.addEventListener("click", (e) => {
  if (textArea.value.match(/\S/)) {
    console.log(textArea.value != " ");
    //comment();
    //document.body.insertBefore(user1Container, newComment);
    document.body.insertBefore(comment(), newComment);
    textArea.value = " ";
  }
  //e.target.style.backgroundColor = "red";
});
sendButton.classList.add("send-button");
sendButton.innerText = "SEND";
sentBtnContainer.appendChild(sendButton);

//
//create comment after clicking send button
function comment() {
  const editText = textArea.value;
  const user1Container = document.createElement("div");
  //repliesContainer.appendChild(user1Container);
  //document.body.appendChild(user1Container);
  ///document.body.insertBefore(user1Container, newComment);
  user1Container.classList.add("user1-container");

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  user1Container.appendChild(commentBox);
  // * comment header
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  commentBox.appendChild(commentHeader);
  //-add photo
  const avatar = document.createElement("img");
  avatar.classList.add("user1-avatar");
  avatar.src = "./images/avatars/image-juliusomo.png";
  /*avatar.setAttribute(
    "src",
    //data["comments"][1]["replies"][0]["user"]["image"]["webp"]
    respons["user"]["image"]["webp"]
  );*/

  commentHeader.appendChild(avatar);
  //- add name
  const user1Name = document.createElement("h3");
  user1Name.classList.add("user1-name");
  //user1Name.innerText=;
  const user1NameContent = document.createTextNode("juliusomo");
  user1Name.appendChild(user1NameContent);
  commentHeader.appendChild(user1Name);
  //
  const you = document.createElement("span");
  you.innerText = "you";
  you.classList.add("you");
  user1Name.appendChild(you);
  //add comment publish time
  const publishTime = document.createElement("p");
  publishTime.classList.add("publish-time");
  const publishTimeContent = document.createTextNode("now");
  publishTime.appendChild(publishTimeContent);
  commentHeader.appendChild(publishTime);
  //

  //

  const headerReply = document.createElement("div");
  headerReply.classList.add("header-reply");
  commentHeader.appendChild(headerReply);

  const upheaderDeleteBtn = document.createElement("button");
  upheaderDeleteBtn.classList.add("header-delete-btn");
  upheaderDeleteBtn.setAttribute("type", "button");
  headerReply.appendChild(upheaderDeleteBtn);
  makeDeleteIcon(upheaderDeleteBtn);
  //  **** delete comment***
  upheaderDeleteBtn.addEventListener("click", () => {
    console.log("good");
    deleteMainContainer.style.display = "flex";
    noCancelBtn.addEventListener("click", () => {
      deleteMainContainer.style.display = "none";
    });
    yesCancelBtn.addEventListener("click", () => {
      //document.body.removeChild(user1Container);
      user1Container.remove();
      deleteMainContainer.style.display = "none";
    });
  });
  const upheaderDeleteBtnTxt = document.createTextNode("Delete");
  upheaderDeleteBtn.appendChild(upheaderDeleteBtnTxt);

  const upheaderEditBtn = document.createElement("button");
  upheaderEditBtn.setAttribute("type", "button");
  upheaderEditBtn.classList.add("header-edit-btn");
  headerReply.appendChild(upheaderEditBtn);
  makeEditIcon(upheaderEditBtn);
  const upheaderEditBtnTxt = document.createTextNode("Edit");
  upheaderEditBtn.appendChild(upheaderEditBtnTxt);

  //
  //edit button
  upheaderEditBtn.addEventListener("click", () => {
    /*const commentsEditText = document.createElement("textarea");
    commentsEditText.classList.add("text-area");
    commentsEditText.value = editText;
    commentBox.appendChild(commentsEditText);
    commentBox.removeChild(commentTxt);*/
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    //textArea.value = editText;
    textArea.value = commentTxt.innerText;
    commentBox.appendChild(textArea);
    commentBox.removeChild(commentTxt);
    const updateBtn = document.createElement("button");
    updateBtn.type = "button";
    updateBtn.classList.add("update");
    updateBtn.innerText = "UPDATE";
    commentBox.appendChild(updateBtn);
    updateBtn.addEventListener("click", () => {
      console.log(999);
      //commentTxt.innerText = commentsEditText.value;
      commentTxt.innerText = textArea.value;
      //const editedReplyText = document.createElement("p");
      //editedReplyText.classList.add("comment-txt");
      //editedReplyText.innerText = commentsEditText.value;
      //commentBox.appendChild(editedReplyText);
      commentBox.appendChild(commentTxt);
      //commentBox.removeChild(commentsEditText);
      commentBox.removeChild(textArea);
      commentBox.removeChild(updateBtn);
    });
  });

  // comment text
  const commentTxt = document.createElement("p");
  commentTxt.classList.add("comment-txt");
  commentBox.appendChild(commentTxt);

  //add text content
  //const txtContentUser1 = document.createTextNode(respons["content"]);
  const txtContentUser1 = document.createTextNode(textArea.value);
  commentTxt.appendChild(txtContentUser1);

  // *interaction with comment
  const interactioncContainer = document.createElement("div");
  interactioncContainer.classList.add("interaction-container");
  user1Container.appendChild(interactioncContainer);
  //-likes box
  const likesBox = document.createElement("div");
  likesBox.classList.add("likes-box");
  interactioncContainer.appendChild(likesBox);

  const addLikeBtn = document.createElement("img");
  addLikeBtn.classList.add("add-like-btn");
  addLikeBtn.setAttribute("src", "./images/icon-plus.svg");
  likesBox.appendChild(addLikeBtn);

  const likes = document.createElement("p");
  likes.classList.add("likes");
  const likesTxt = document.createTextNode(
    data["comments"][1]["replies"][0]["score"]
  );
  likes.appendChild(likesTxt);
  likesBox.appendChild(likes);

  const removeLikeBtn = document.createElement("img");
  removeLikeBtn.classList.add("remove-like-btn");
  removeLikeBtn.setAttribute("src", "./images/icon-minus.svg");
  likesBox.appendChild(removeLikeBtn);
  //create replty btn

  const footerReply = document.createElement("div");
  footerReply.classList.add("footer-reply");
  interactioncContainer.appendChild(footerReply);

  const headerDeleteBtn = document.createElement("button");
  headerDeleteBtn.classList.add("header-delete-btn");
  headerDeleteBtn.setAttribute("type", "button");
  footerReply.appendChild(headerDeleteBtn);
  makeDeleteIcon(headerDeleteBtn);
  //  **** delete comment***
  headerDeleteBtn.addEventListener("click", () => {
    console.log("good");
    deleteMainContainer.style.display = "flex";
    noCancelBtn.addEventListener("click", () => {
      deleteMainContainer.style.display = "none";
    });
    yesCancelBtn.addEventListener("click", () => {
      document.body.removeChild(user1Container);
      deleteMainContainer.style.display = "none";
    });
  });
  const headerDeleteBtnTxt = document.createTextNode("Delete");
  headerDeleteBtn.appendChild(headerDeleteBtnTxt);

  const headerEditBtn = document.createElement("button");
  headerEditBtn.setAttribute("type", "button");
  headerEditBtn.classList.add("header-edit-btn");
  footerReply.appendChild(headerEditBtn);
  // edit function

  headerEditBtn.addEventListener("click", () => {
    /*const commentsEditText = document.createElement("textarea");
    commentsEditText.classList.add("text-area");
    commentsEditText.value = editText;
    commentBox.appendChild(commentsEditText);
    commentBox.removeChild(commentTxt);*/
    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    //textArea.value = editText;
    textArea.value = commentTxt.innerText;
    commentBox.appendChild(textArea);
    commentBox.removeChild(commentTxt);
    const updateBtn = document.createElement("button");
    updateBtn.type = "button";
    updateBtn.classList.add("update");
    updateBtn.innerText = "UPDATE";
    commentBox.appendChild(updateBtn);
    updateBtn.addEventListener("click", () => {
      console.log(999);
      //commentTxt.innerText = commentsEditText.value;
      commentTxt.innerText = textArea.value;
      //const editedReplyText = document.createElement("p");
      //editedReplyText.classList.add("comment-txt");
      //editedReplyText.innerText = commentsEditText.value;
      //commentBox.appendChild(editedReplyText);
      commentBox.appendChild(commentTxt);
      //commentBox.removeChild(commentsEditText);
      commentBox.removeChild(textArea);
      commentBox.removeChild(updateBtn);
    });
  });

  makeEditIcon(headerEditBtn);
  const headerEditBtnTxt = document.createTextNode("Edit");
  headerEditBtn.appendChild(headerEditBtnTxt);

  return user1Container;
}

//create reply icon
function makeReplyIcon(place) {
  const replySvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  replySvg.classList.add("reply-svg");
  const replyPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  replyPath.classList.add("reply-path");

  replySvg.setAttribute("width", "14");
  replySvg.setAttribute("height", "13");

  replyPath.setAttribute(
    "d",
    "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
  );
  replyPath.setAttribute("fill", "#5357B6");

  replySvg.appendChild(replyPath);
  //interactioncContainer.appendChild(replySvg);
  place.appendChild(replySvg);
}

//create delete icon

function makeDeleteIcon(place) {
  const deleteSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  deleteSvg.classList.add("delete-svg");
  const deletePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  deletePath.classList.add("delete-path");

  deleteSvg.setAttribute("width", "12");
  deleteSvg.setAttribute("height", "14");

  deletePath.setAttribute(
    "d",
    "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
  );
  deletePath.setAttribute("fill", "#ED6368");

  deleteSvg.appendChild(deletePath);

  place.appendChild(deleteSvg);
}

//create edit icon

function makeEditIcon(place) {
  const editSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  editSvg.classList.add("edit-svg");
  const editPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  editPath.classList.add("edit-path");

  editSvg.setAttribute("width", "14");
  editSvg.setAttribute("height", "14");

  editPath.setAttribute(
    "d",
    "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
  );
  editPath.setAttribute("fill", "#5357B6");

  editSvg.appendChild(editPath);

  place.appendChild(editSvg);
}

//current user reply

/*data["comments"].push(15);
console.log(data["comments"]);*/

//create new reply maker after clicking reply

/*function replymake() {
  const newComment = document.createElement("div");
  newComment.classList.add("new-comment");
  const currentUserimgDesktop = document.createElement("img");
  currentUserimgDesktop.classList.add("current-user-img-desktop");
  currentUserimgDesktop.src = "./images/avatars/image-juliusomo.png";
  newComment.appendChild(currentUserimgDesktop);
  const textArea = document.createElement("textarea");
  textArea.classList.add("text-area");
  textArea.placeholder = "Add a comment…";
  textArea.value = " ";
  newComment.appendChild(textArea);
  const sentBtnContainer = document.createElement("div");
  sentBtnContainer.classList.add("sent-btn-container");
  newComment.appendChild(sentBtnContainer);
  const currentUserimg = document.createElement("img");
  currentUserimg.src = "./images/avatars/image-juliusomo.png";
  sentBtnContainer.appendChild(currentUserimg);
  //document.body.appendChild(newComment);
  //document.body.insertBefore(newComment, user1Container);
  const replyButton = document.createElement("button");
  replyButton.type = "button";
  replyButton.addEventListener("click", (e) => {
    if (textArea.value.match(/\S/)) {
      console.log(textArea.value != " ");
      //comment();
      document.body.insertBefore(comment(), replycontainer);
      textArea.value = " ";
    }
    //e.target.style.backgroundColor = "red";
  });
  replyButton.classList.add("reply-button");
  replyButton.innerText = "REPLY";
  sentBtnContainer.appendChild(replyButton);
  return newComment;
}*/

/*
headerEditBtn.addEventListener("click", () => {
    const commentsEditText = document.createElement("textarea");
    commentsEditText.classList.add("text-area");
    commentsEditText.value = editText;
    commentBox.appendChild(commentsEditText);
    commentBox.removeChild(commentTxt);
    const updateBtn = document.createElement("button");
    updateBtn.type = "button";
    updateBtn.classList.add("update");
    updateBtn.innerText = "UPDATE";
    commentBox.appendChild(updateBtn);
    updateBtn.addEventListener("click", () => {
      console.log(999);
      const editedReplyText = document.createElement("p");
      editedReplyText.classList.add("comment-txt");
      editedReplyText.innerText = commentsEditText.value;
      commentBox.appendChild(editedReplyText);
      commentBox.removeChild(commentsEditText);
      commentBox.removeChild(updateBtn);
    });
*/
