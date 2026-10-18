import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();

    const { region, season } = req.query;

    const allRoutes = await getAllRoutes();

    const routes = allRoutes.filter(route =>
    (!region || region === 'all' || route.region.toLowerCase() === region.toLowerCase()) &&
    (!season || season === 'all' || route.bestSeason.toLowerCase() === season.toLowerCase())
);

    const seasons = await getListOfSeasons();
    
    res.render('routes/list', { 
        query: { region, season },
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};