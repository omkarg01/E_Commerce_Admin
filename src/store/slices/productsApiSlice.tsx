import {PRODUCTS_URL, USERS_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {ReviewType} from '../../types/ReviewType';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{products: ProductType[]}, void>({
      query: () => 'products',
    }),
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => 'banners',
    }),
    getCarousel: builder.query<{carousel: CarouselType[]}, void>({
      query: () => 'carousel',
    }),
    createReview: builder.mutation<{review: ReviewType}, ReviewType>({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.id}/reviews.json`,
        method: 'GET',
        // body: data,
      }),
      // invalidatesTags: ['Product'],
    }),
    // register: builder.mutation<{user: UserType}, UserType>({
    //   query: () => ({
    //     url: `${USERS_URL}`,
    //     method: 'GET',
    //     // body: data,
    //   }),
    // }),
  }),
});

export const {
  useGetProductsQuery,
  useGetBannersQuery,
  useGetCarouselQuery,
  useCreateReviewMutation,
} = productsApiSlice;
