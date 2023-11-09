import { atomWithProxy } from "jotai-valtio";
import { proxy } from "valtio/vanilla";

const proxyState = proxy({ isDark: false });

const stateAtom = atomWithProxy(proxyState);

export default stateAtom;
