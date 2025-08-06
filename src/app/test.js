// 			<div>
// 				<nav>
// 					<ul className="flex justify-center">
// 						{Array.from({ length: totalPages }, (_, index) => {
// 							const page = index + 1;

// 							return (
// 								<li
// 									className="mr-[10px] border-[1px] border-blue-300 p-[5px] bg-[aqua]"
// 									key={page}
// 								>
// 									<button
// 										onClick={() => {
// 											// `/?page=2`
// 											router.push(
// 												`${pathname}?${createQueryString(
// 													"page",
// 													page,
// 												)}`,
// 											);

// 											// '/?page=2'
// 										}}
// 									>
// 										{page}
// 									</button>
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</nav>
// 			</div>
// 		</div>

//   );

// <div className="mx-48 mt-12">
//       <button className="btn pagination__btn">
//         <i className="bi bi-chevron-left"></i>
//       </button>
//       <button className="btn pagination__btn">2</button>
//       <button className="btn pagination__btn">3</button>
//       <button className="btn pagination__btn">4</button>
//       <button className="btn pagination__btn">5</button>
//       <button className="btn pagination__btn">6</button>
//       <button className="btn pagination__btn">7</button>
//       <button className="btn pagination__btn">8</button>
//       <button className="btn pagination__btn">9</button>
//       <button className="btn pagination__btn">10</button>
//       <button className="btn pagination__btn">...</button>
//       <button className="btn pagination__btn">50</button>
//       <button className="btn pagination__btn">
//         <i className="bi bi-chevron-right"></i>
//       </button>
//     </div>

{/* <div className="mx-48 mt-12">
  <button className="btn pagination__btn">
    <i className="bi bi-chevron-left"></i>
  </button>
  <button className="btn pagination__btn">2</button>

  <button className="btn pagination__btn">
    <i className="bi bi-chevron-right"></i>
  </button>
</div>; */}
