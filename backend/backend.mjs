import PocketBase from 'pocketbase';
const pb = new PocketBase('https://fanfa-comtoise.girardin-tarby.fr');

// artistes
export async function artistesSorted() {
    return await pb.collection('artistes').getFullList({ 
        sort: 'debut',
        expand: "scene", 
    });
}

export async function artistesName() {
    return await pb.collection('artistes').getFullList({ sort: 'nom' });
}

export async function artisteID(id) {
    return await pb.collection('artistes').getOne(id);
}

// scènes
export async function scenesName() {
    return await pb.collection('scene').getFullList({ sort: 'nom' });
}

export async function sceneID(id) {
    return await pb.collection('scene').getOne(id);
}

export async function allartistebysceneId(id) {
    return await pb.collection('artistes').getFullList({ filter: `scene = "${id}"`, sort: 'debut' });
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('scene').getFirstListItem({ filter: `nom = "${nom}"` });
    return await pb.collection('artistes').getFullList({ filter: `scene = "${scene.id}"`, sort: 'debut' });
}

// create / update
export async function addArtiste(artisteData) {
    try {
        return await pb.collection('artistes').create(artisteData);
    } catch (error) {
        console.error('Erreur ajout artiste :', error);
        throw error;
    }
}

export async function addScene(sceneData) {
    try {
        return await pb.collection('scene').create(sceneData);
    } catch (error) {
        console.error('Erreur ajout scène :', error);
        throw error;
    }
}

export async function updateArtiste(id, artisteData) {
    try {
        return await pb.collection('artistes').update(id, artisteData);
    } catch (error) {
        console.error('Erreur maj artiste :', error);
        throw error;
    }
}

export async function updateScene(id, sceneData) {
    try {
        return await pb.collection('scene').update(id, sceneData);
    } catch (error) {
        console.error('Erreur maj scène :', error);
        throw error;
    }
}

// contact
export async function addContact(contactData) {
    try {
        return await pb.collection('contact').create(contactData);
    } catch (error) {
        console.error('Erreur ajout contact :', error);
        throw error;
    }
}