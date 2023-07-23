import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// import dotenv from "dotenv";
// dotenv.config()
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
};
export const hookGetImages = (path) => {
  initializeApp(firebaseConfig);
  const storage = getStorage();
  const folderPath = `gs://crudpapeleria.appspot.com/${path}`;
  const folderRef = ref(storage, folderPath);

  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
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
              setIsLoading(false);
              setImages(urlsImages);
            })
            .catch((err) => {
              console.log("Error al procesar las imagenes");
            });
        })
        .catch((err) => {
          return console.log("Error al obtener la lista de imagenes");
        });
    })();
  }, []);
  return {
    images,
    isLoading,
  };
};
