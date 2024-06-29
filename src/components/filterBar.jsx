import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridViewIcon from '@mui/icons-material/GridView';
import AppsIcon from '@mui/icons-material/Apps';

export default function FilterBar(){
    return(
        <>
        <div className="w-3/4 grid grid-cols-10 border border-yellow-700 rounded text-yellow-700 font-thasadith text-center mb-4">
            <div className="border-r border-yellow-700 flex items-center justify-center p-2"> <span className="inline ml-3">Filter</span> <span className="text-xs hover:text-yellow-600  -rotate-90 hover:rotate-0 hover:transition-all"><FontAwesomeIcon icon="fa-solid fa-angle-down" /></span></div>
            <div className="col-span-8 content-center"><input className="w-full h-full focus:border-blue"></input></div>
            <div className="border-l border-yellow-700 text-yellow-700 align-middle p-2"> 
            <GridViewIcon />
            <AppsIcon />
            </div>
        </div>
        </>
    )
}