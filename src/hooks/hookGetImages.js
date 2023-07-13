import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAEkIbhdd1bQKCHF5B590iWUXheiRvfcWU",
  authDomain: "project-254876512081",
  projectId: "crudpapeleria",
};
export const hookGetImages = (path) => {
  initializeApp(firebaseConfig);
  const storage = getStorage();
  const folderPath = `gs://crudpapeleria.appspot.com/${path}`;
  const folderRef = ref(storage, folderPath);

  const [images, setImages] = useState(null);
  useEffect(() => {
    (async () => {
      listAll(folderRef)
        .then(async (res) => {
          const images = res.items.map(async (image) => {
            const url = await getDownloadURL(image);
            return {
              url,
            };
          });
          Promise.all(images)
            .then((urlsImages) => {
              setImages(urlsImages);
            })
            .catch((err) => {
                console.log('Error al procesar las imagenes')
            });
        })
        .catch((err) => {
          return console.log("Error al obtener la lista de imagenes");
        });
    })();
  }, []);
  return {
    images,
  };
};
