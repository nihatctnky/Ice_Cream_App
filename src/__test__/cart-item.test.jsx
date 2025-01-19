import { render, screen } from "@testing-library/react";
import CartItem from "../components/modal/cart-item";
import { mockItem } from "../utils/constants";


// src/utils/constants.js veya ilgili dosyada mockItem'in doğru şekilde tanımlandığını kontrol edin


// amount picker'ı mockladık çünkü onun testini zaten yazmıştık
jest.mock("../components/modal/amount-picker");

it("cart item bileşeni gelen propu doğru şekilde kullanır", () => {
    render(<CartItem item={mockItem} />);

    // mockItem.name ve mockItem.type gibi değerlerin render edilip edilmediğini kontrol ediyoruz
    screen.getByText(mockItem.name);  // mockItem.name doğru şekilde render edilecek
    screen.getByText(mockItem.type);  // mockItem.type burada da kullanılacak
    screen.getByText(mockItem.price * mockItem.amount + "₺");  // Hesaplanan fiyat doğru mu?

    // Görselin doğru şekilde yüklendiğini kontrol ediyoruz
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockItem.image);  // mockItem.image yolu doğru olmalı
});
