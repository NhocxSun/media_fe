import { 
    Home, 
    Upload,
    SearchResult
} from "src/pages";

// export const PATH_HOME = "/";
// export const PATH_UPLOAD = "/upload";
// export const PATH_SEARCH_RESULT = "/search-result";

export const PATH_HOME = "/media_fe/";
export const PATH_UPLOAD = "/media_fe/upload";
export const PATH_SEARCH_RESULT = "/media_fe/search-result";

export const router = [
    { path: PATH_HOME, component: Home },
    { path: PATH_UPLOAD, component: Upload },
    { path: PATH_SEARCH_RESULT + "/:slug", component: SearchResult },
];