import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetTranslations from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    GetTranslations(movie.id).then(translations => {
      setTranslations(translations);
    });
  }, );

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {translations.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.translations}</td>
                <td>{excerpt(t.data)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movie/translations/${t.id}`,
                      state: {
                        translate: t,
                        movie: movie
                      }
                    }}
                  >
                    Translations
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};