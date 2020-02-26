import StoresContainer from "../components/modules/stores/StoresContainer";
import HomeContainer from "../components/modules/home/HomeContainer";

export const routes =  [
    {path: '/', exact: true, component: HomeContainer},
    {path: '/store/', component: StoresContainer}
];
