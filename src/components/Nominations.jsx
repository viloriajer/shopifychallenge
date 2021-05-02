import React, { useContext } from "react";
import { Context } from "../App";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmAlert } from "react-confirm-alert";

export const Nominations = () => {
  const { nominees, setNominees } = useContext(Context);

  const remove = (movie) => {
    confirmAlert({
      message: "Are you sure you wish to remove this nominee?",
      buttons: [
        {
          label: "Confirm",
          onClick: () => {
            const remove = nominees.findIndex(
              (item) => item.imdbID === movie.imdbID
            );
            let newArray = [...nominees];
            newArray.splice(remove, 1);
            console.log(newArray);
            setNominees(newArray);
          },
        },
        {
          label: "No",
          onClick: () => {
            return null;
          },
        },
      ],
    });
    // confirmAlert({
    //     title: 'Confirm to submit',
    //     message: 'Are you sure to do this.',
    //     buttons: [
    //       {
    //         label: 'Yes',
    //         onClick: () => alert('Click Yes')
    //       },
    //       {
    //         label: 'No',
    //         onClick: () => alert('Click No')
    //       }
    //     ]
    //   });
  };

  return (
    <div>
      <h4>Nominations</h4>
      {nominees?.map((movie) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>
              {movie.Title} ({movie.Year})
            </p>
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => remove(movie)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};
