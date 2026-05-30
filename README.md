# Nuclide Connection Web

Interactive web visualization of known isotopes/nuclides.

- Nodes are isotopes.
- Node color represents the element.
- Lines represent isotope-chain, beta decay, beta+/electron-capture, and alpha-decay relationships.
- Arrows show decay direction.
- Sliders filter by proton number Z and neutron number N.

## Controls

- Move mode: drag nodes.
- Orbit mode: drag to rotate the web.
- Pan mode: drag to pan.
- Right-drag: pan.
- Mouse wheel: zoom.
- Q/E: move selected node forward/backward in depth.
- R: reset layout.
- V: reset view.
- L: toggle labels.
- 0–4: link filters.

The page loads the public Great Tables nuclides dataset from GitHub when opened.

## License

This project is licensed under the MIT License. See `LICENSE`.

The nuclide dataset is loaded from an external public GitHub source and is not
included in this repository. This is an unofficial visualization project and is
not endorsed by the dataset maintainers or any nuclear data authority.
