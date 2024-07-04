import app from "./app.js";
import { connectDB } from "./scr/db/db.js";
 
connectDB();

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
  console.log(`server listen on port http://localhost:${PORT}`);
});
