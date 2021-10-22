class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    quantity = Number(quantity);
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error('This article model is not included in this gallery!');
    }
    let articleExists = false;
    for (let article of this.listOfArticles) {
      if (article.articleName == articleName && article.articleModel == articleModel) {
        article.quantity += quantity;
        articleExists = true;
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
      }
    }
    if (!articleExists) {
      let obj = {
        articleModel,
        articleName,
        quantity,
      };
      this.listOfArticles.push(obj);
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
  }

  inviteGuest(guestName, personality) {
    const personalities = {
      Vip: 500,
      Middle: 250,
    };

    for (let guest of this.guests) {
      if (guest.guestName == guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }

    let points = 50;
    if (personalities.hasOwnProperty(personality)) {
      points = personalities[personality];
    }
    let obj = {
      guestName,
      points,
      purchaseArticle: 0,
    };
    this.guests.push(obj);
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let articleNotExisting = true;
    for (let article of this.listOfArticles) {
      if (article.articleName == articleName && article.articleModel == articleModel) {
        articleNotExisting = false;
        if (article.quantity <= 0) {
          return `The ${articleName} is not available.`;
        }
        let guestNotInvited = true;
        for (let guest of this.guests) {
          if (guest.guestName == guestName) {
            guestNotInvited = false;
            if (guest.points < this.possibleArticles[article.articleModel]) {
              return `You need to more points to purchase the article.`;
            } else {
              guest.points -= this.possibleArticles[article.articleModel];
              article.quantity--;
              guest.purchaseArticle++;
              return `${guestName} successfully purchased the article worth ${
                this.possibleArticles[article.articleModel]
              } points.`;
            }
          }
        }
        if (guestNotInvited) {
          return `This guest is not invited.`;
        }
      }
    }
    if (articleNotExisting) {
      throw new Error('This article is not found.');
    }
  }

  showGalleryInfo(criteria) {
    let result = '';
    if (criteria == 'article') {
      result += 'Articles information:';
      for (let article of this.listOfArticles) {
        result += `\n${article.articleModel} - ${article.articleName} - ${article.quantity}`;
      }
      return result;
    }
    if (criteria == 'guest') {
      result += 'Guests information:';
      for (let guest of this.guests) {
        result += `\n${guest.guestName} - ${guest.purchaseArticle}`;
      }
      return result;
    }
  }
}
