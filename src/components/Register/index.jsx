import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/auth";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [role, setRole] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error("Password not match");
      setIsLoading(false);
      return;
    }

    dispatch(
      register(navigate, name, email, password, photo, role, setIsLoading)
    );
  };

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="photo">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value={""} disabled>
            -- Select Role --
          </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Register"}
      </Button>
    </Form>
  );
}

export default RegisterForm;
