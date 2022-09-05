import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav class="w-[20vw]">
			<div class="h-[100vh] fixed top-0 px-8 py-4">
				<div class="logo h-[150px]" >
					<img src="./public/assets/logo.png" alt="" class="img-contain w-[150px]" />
				</div>
				<div class="h-full absolute top-[50%]">
					<ul class=" -translate-y-1/2">
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Úvod</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Novinky</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Čas plynie</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Životopis</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Výstavy</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Tvorba</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">IKAR</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Video</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Fotogaléria</a></li>
						<li class=" my-2 cursor-pointer"><a class="text-gray-500" href="">Kontakt</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
