<div className="contenedor card-panel grey lighten-5 z-depth-4">
      <img className="imagen-fondo" src={logo} alt="imagen de fondo" />

      <div className="toolbar">
        <div className="text-container">
          <span className="title">TogetHERapp</span>
          <span className="sub-title">Crear y administrar usuarios</span>
        </div>
        <div className="boton-mobile">
          <button
            onClick={() => setOpen(true)}
            className="button btn-floating waves-effect waves-light"
            value="Crear"
            type="button"
            name="action"
          >
            <i className="material-icons right">add</i>
          </button>

          <button
            onClick={() => setOpen()}
            className="button btn-floating waves-effect waves-light"
            type="button"
            value="cerrar"
          >
            <i className="material-icons right">close</i>
          </button>
        </div>
        <div className="boton-desktop">
          <button
            onClick={() => setOpen(true)}
            className="button btn waves-effect waves-light"
            value="Crear"
            type="button"
            name="action"
          >
            Crear usuario
            <i className="material-icons right">add</i>
          </button>
          <button
            onClick={() => setOpen(true)}
            className="button btn waves-effect waves-light"
            value="cerrar"
            type="button"
            name="action"
          >
            Cerrar Sesion
            <i className="material-icons right">close</i>
          </button>
        </div>
      </div>
      <div className="list-container">
        <span className="list-title">ALERTAS</span>
        <div className="list-content">
          <Main>{alertsData && alertsData.map(alert => <CardAlert data={alert} />)}</Main>
        </div>
      </div>
    </div>