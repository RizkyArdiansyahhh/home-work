import { useForm } from "react-hook-form";
import "./App.css";
import { z, ZodNumber } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "./hooks/useUser";
import CardUser from "./components/cardUser";

function App() {
  const registerFormSchema = z
    .object({
      name: z.string().min(6),
      email: z.email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      age: z.coerce
        .number()
        .gte(18, { message: "Must be 18 and above" }) as ZodNumber,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password dont match",
      path: ["confirmPassword"],
    });

  type RegisterFormSchema = z.infer<typeof registerFormSchema>;

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });
  const { users, handleAddUser } = useUser();

  const handleSubmitFormRegister = (data: RegisterFormSchema) => {
    const dataFinal = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    handleAddUser(dataFinal);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(0,0,0,.3",
            padding: "1rem",
            borderRadius: "15px",
          }}
        >
          <h1>Register</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={form.handleSubmit(handleSubmitFormRegister)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="name">Name</label>
              <input type="text" id="name" {...form.register("name")} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...form.register("email")} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...form.register("password")}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                {...form.register("confirmPassword")}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="age">Age</label>
              <input type="text" id="age" {...form.register("age")} />
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {users.length > 0 ? (
            users.map((user) => {
              const { id, name, email, password, age, createdAt } = user;
              return (
                <CardUser
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  password={password}
                  age={age}
                  createdAt={createdAt}
                />
              );
            })
          ) : (
            <p>User Not Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
