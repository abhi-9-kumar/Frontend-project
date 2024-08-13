export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson} from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}external_ids`);
        const recommendations = await axios.get('/person/${id}/recommendations');
        const similar = await axios.get('/person/${id}/similar');
        const translations = await axios.get('/person/${id}/translations');
        const videos = await axios.get(`/person/${id}/videos`);
        const watchproviders = await axios.get(`/person/${id}/watch/providers`);

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.english_name),
            videosr: videos.data.results.find(m =>m.type ==="trailer"),
            watchproviders: watchproviders.data.results.IN, 
        };

        dispatch(loadperson(theultimatedetails));
        

    } catch (error) {
        console.log("Error: ",error);
    }
};
