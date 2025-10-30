import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import EncuestaModal from "../../src/components/EncuestaModal";

describe("EncuestaModal", () => {
  let component;
  const onClose = jasmine.createSpy("onClose");

  beforeEach(() => {
    act(() => {
      component = TestRenderer.create(
        <EncuestaModal isOpen={true} onClose={onClose} />
      );
    });
  });

  it("muestra mensaje de éxito al enviar", () => {
    const root = component.root;
    const form = root.findByType("form");

    act(() => {
      form.props.onSubmit({
        preventDefault: () => {},
        target: { reset: () => {} }
      });
    });

    const msg = root.findByProps({ id: "mensajeExito" });

    expect(msg.props.children).toBe("¡Encuesta enviada con éxito!");
  });

  it("llama onClose después de 3 segundos", (done) => {
    const form = component.root.findByType("form");

    act(() => {
      form.props.onSubmit({
        preventDefault: () => {},
        target: { reset: () => {} }
      });
    });

    setTimeout(() => {
      expect(onClose).toHaveBeenCalled();
      done();
    }, 3100);
  });

});