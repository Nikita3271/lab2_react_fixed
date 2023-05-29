import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)

  const [type, setType] = useState(1);

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const [username, setUsername] = useState();
  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();


  const checkUser = () => {
    return store.users.users.find(v => v.name === username)
  }

  const findUser = () => {
    return store.users.users.find(v => v.name === name && v.password === pass)
  }

  const signIn = () => {
    let user = findUser()
    if (user) {
      dispath(({ type: "add", id: user.id, name: user.name, password: user.password }));
      navigate("/user")
    } else {
      alert("Неверный логин или пароль!")
    }
  }

  const signUp = () => {
    if (pass1 !== pass2) {
      alert("Пароли не совпадают!")
      return
    }

    if (checkUser()) {
      alert("Пользователь с таким именем уже есть!")
      return
    }

    dispath(({ type: "addUser", name: username, password: pass1 }))
    alert("Пользователь успешно создан!")

    setName("");
    setPass("");
    setUsername("");
    setPass1("");
    setPass2("");
  }

  const changePage = (type) => {
    setType(type)

    setName("");
    setPass("");
    setUsername("");
    setPass1("");
    setPass2("");
  }

  return (
    <>
      <div className="main">
        <div className="form_login" >
          <h1>Вход</h1>
          <input className="input_login" placeholder="Ваш логин" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="input_login" type="password" placeholder="Ваш пароль" value={pass} onChange={(e) => setPass(e.target.value)} />
          <button className="button_login" onClick={signIn} disabled={!name || !pass}>Войти</button>
        </div>
      </div>
    </>
  );
}

export default Index;