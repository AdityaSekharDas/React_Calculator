export default function Buttons({on_click_button}) {
    return (
        <div className="button">
            <button onClick={() => on_click_button("0")} className="button_style">0</button>
            <button onClick={() => on_click_button("1")} className="button_style">1</button>
            <button onClick={() => on_click_button("2")} className="button_style">2</button>
            <button onClick={() => on_click_button("+")} className="sbutton_style">+</button>
            <button onClick={() => on_click_button("3")} className="button_style">3</button>
            <button onClick={() => on_click_button("4")} className="button_style">4</button>
            <button onClick={() => on_click_button("5")} className="button_style">5</button>
            <button onClick={() => on_click_button("-")} className="sbutton_style">-</button>
            <button onClick={() => on_click_button("6")} className="button_style">6</button>
            <button onClick={() => on_click_button("7")} className="button_style">7</button>
            <button onClick={() => on_click_button("8")} className="button_style">8</button>
            <button onClick={() => on_click_button("*")} className="sbutton_style">*</button>
            <button onClick={() => on_click_button("9")} className="button_style">9</button>
            <button onClick={() => on_click_button("C")} id="c">C</button>
            <button onClick={() => on_click_button("=")} id="eb">=</button>
            <button onClick={() => on_click_button("/")} className="sbutton_style">/</button>
        </div>
        
    );
}
