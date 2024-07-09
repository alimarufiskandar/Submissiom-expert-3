import { screen, fireEvent } from '@testing-library/dom';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import { createLikeButtonTemplate } from '../src/scripts/views/templates/template-creator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'; // pastikan ini di-import dengan benar

describe('Like Button Initiator', () => {
  let likeButtonContainer;
  const restaurant = { id: 1, name: 'A Restaurant' };

  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    likeButtonContainer = document.getElementById('likeButtonContainer');
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });
    expect(screen.getByLabelText('like this movie')).toBeInTheDocument();
  });

  it('should show the liked button when the restaurant has been liked', async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    expect(screen.getByLabelText('unlike this movie')).toBeInTheDocument();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    fireEvent.click(screen.getByLabelText('like this movie'));

    expect(await FavoriteRestaurantIdb.getRestaurant(restaurant.id)).toEqual(restaurant);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    fireEvent.click(screen.getByLabelText('like this movie'));

    expect((await FavoriteRestaurantIdb.getAllRestaurant()).length).toEqual(1);
  });

  it('should be able to unlike the restaurant', async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    fireEvent.click(screen.getByLabelText('unlike this movie'));

    expect(await FavoriteRestaurantIdb.getRestaurant(restaurant.id)).toBeUndefined();
  });

  it('should not remove a restaurant again when its not in the list', async () => {
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    fireEvent.click(screen.getByLabelText('unlike this movie'));

    expect((await FavoriteRestaurantIdb.getAllRestaurant()).length).toEqual(0);
  });
});
