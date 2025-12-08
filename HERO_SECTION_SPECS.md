# Specyfikacja Hero Sekcji - Wymiary Grafiki

## Wymiary tła Hero Sekcji

### Rekomendowane rozmiary grafiki tła:

**Standardowa rozdzielczość:**
- **Szerokość:** 1920px
- **Wysokość:** 1080px
- **Format:** 16:9
- **DPI:** 72-96 (web)

**Retina/4K (opcjonalnie, dla lepszej jakości):**
- **Szerokość:** 3840px
- **Wysokość:** 2160px
- **Format:** 16:9
- **DPI:** 144-192

### Charakterystyka Hero Sekcji:

1. **Wysokość sekcji:**
   - Minimum: 100vh (pełna wysokość ekranu)
   - Na większych ekranach może być wyższa
   - Zawartość jest wyśrodkowana wertykalnie

2. **Szerokość:**
   - Pełna szerokość ekranu (100vw)
   - Grafika powinna być przygotowana na szerokość minimum 1920px

3. **Obszary ważne w grafice:**
   - **Środek (50% wysokości):** Główna treść - logo, tytuły, przyciski
   - **Lewa strona (0-30% szerokości):** Ciemniejszy obszar (czarny gradient)
   - **Prawa strona (70-100% szerokości):** Czerwony gradient (burgund → czerwień)
   - **Dolna część:** Może być ciemniejsza (scroll indicator na dole)

4. **Nakładki:**
   - Na grafice będzie nałożony gradient: `czarny → burgund (#6B0000) → czerwień (#8B0000)`
   - Opacity gradientu: ~90%
   - Ornament pattern z przezroczystością ~30%
   - Dekoracyjne krzyże templariuszy (opcjonalnie)

5. **Rekomendacje dla grafika:**
   - **Tematyka:** Rycerska scena z templariuszami, katedra, gotycka architektura
   - **Kolor dominujący:** Ciemne tony (czarny, ciemny burgund)
   - **Oświetlenie:** Dramatyczne, kontrastowe światło
   - **Kompozycja:** Centralna lub lewa strona - miejsce na tekst
   - **Format pliku:** JPG (dla fotografii) lub PNG (dla grafiki z przezroczystością)
   - **Optymalizacja:** Kompresja 80-90% dla web

### Obszary bezpieczne (gdzie będzie tekst):

- **Środek ekranu:** Logo i główne tytuły
- **Lewa strona (0-40%):** Może być ciemniejsza, tekst będzie biały
- **Prawa strona (60-100%):** Czerwony gradient, tekst biały

### Przykładowe wymiary dla różnych urządzeń:

- **Desktop (1920x1080):** 1920x1080px
- **Desktop Retina (2560x1440):** 2560x1440px lub 3840x2160px
- **Tablet (1024x768):** Grafika będzie skalowana
- **Mobile (375x667):** Grafika będzie skalowana

**Rekomendacja:** Przygotuj grafikę w rozdzielczości **3840x2160px** (4K), a następnie zoptymalizuj do **1920x1080px** dla web. To zapewni dobrą jakość na wszystkich urządzeniach.

