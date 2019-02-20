import axios from "axios";
import dotenv from "dotenv";

dotenv.load();

const getLyric = async (artist, title) => {
  const lyric = await axios.get(
    `https://api.vagalume.com.br/search.php?art=${artist}&mus=${title.join(
      "%20"
    )}&apikey=${process.env.APP_KEY}`
  );

  return lyric.data.mus[0].text;
};

export default getLyric;
