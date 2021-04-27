import * as React from "react";
import { Controller } from "react-hook-form";
import {
  Checkbox,
  ThemeProvider, createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
export default ({ control }) => (
    <ThemeProvider theme={theme}>
      <div className="container">

<section>
        <Controller
          name="lookingForAJob"
          control={control}
          
          render={({ field }) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
          )}
        />
      </section>
      </div>
      </ThemeProvider>
)