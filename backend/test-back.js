import { artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene } from './backend.mjs';

/*
// artistes par date
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/ scenes par nom 
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


/artistes par nom
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/ info d'un artiste par id
try { 
    const records = await artisteID('chp4id94l6plqsl'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* info d'une scene par id
try { 
    const records = await sceneID('n29ly34jcyoswgb'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* artistes d'une scene par id de la scene et trié par date
try {
    const records = await allartistebysceneId('n29ly34jcyoswgb');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*artistes d'une scene par nom de la scene et trié par date
try {
    const records = await allartistebysceneName('Kiosque');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/* ajouter un artiste
try {
    const artisteData = {
        "nom": "Bambou Franceschini",
        "date_de_representation": "2026-08-29T20:00:00.000Z",
        "scene" : "n29ly34jcyoswgb",
        "description" : "elle est trop forte",
}; 
    await addArtiste(artisteData);
} catch (e) {
    console.error(e);
}
/

/ ajouter une scene
try {
    const sceneData = {
        "nom": "Star",
        "artistes": ["fo5257ybdjcej92", "21sim3fkd06uvfp"],
        "description" : "scene pour les plus fort",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

/* modifier un artiste
try {
    const data = {
        "nom": "Dis'cover",
        "date_de_representation": "2026-08-29T19:00:00.000Z",
        "scene" : "n29ly34jcyoswgb",
        "description" : " Adèpte des ré-interprétations de grands classiques dans des arrangements Soul / Pop.",
    };
    const record = await updateArtiste('pwyh379jfwr64wk', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}


/* modifier une scene*/
/* 
try {
    const data = {
        "nom": "Kiosque",
        "artistes": ["fo5257ybdjcej92", "21sim3fkd06uvfp"],
        "description": "Première scène du festival qui se situe au kiosque du Parc près la rose à Montbéliard. ",
    };
    const record = await updateScene('lxckm3xrzgdncnw', data);
    console.log("Scène mise à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/