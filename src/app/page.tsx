import { SideBar } from "./sidebar/SideBar";
import { MainPage } from './mainpage/MainPage';

export default function Home() {
    return (
        <>
            <div className="flex flex-row">
                <SideBar />
                <MainPage />
            </div>
        </>
    )
}