//import com.example.Clothing_Billing_Software.Entity.Product;
//import com.example.Clothing_Billing_Software.Entity.Sheet;
//import com.example.Clothing_Billing_Software.Repository.ProductRepository;
//import com.example.Clothing_Billing_Software.Service.ProductExcelService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.ByteArrayInputStream;
//import java.io.IOException;
//import java.io.InputStream;
//import java.util.ArrayList;
//import java.util.List;
//
//public class ProductExcelServiceImpl implements ProductExcelService {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    @Override
//    public void importProductsFromExcel(MultipartFile file) throws IOException {
//        List<Product> products = new ArrayList<>();
//        try (InputStream is = file.getInputStream(); Workbook workbook = new XSSFWorkbook(is)) {
//            Sheet sheet = workbook.getSheetAt(0);
//            Iterator<Row> rows = sheet.iterator();
//
//            if (rows.hasNext()) rows.next();
//
//            while (rows.hasNext()) {
//                Row currentRow = rows.next();
//                Product product = new Product();
//
//                // Cells mapping (Row data read)
//                if (currentRow.getCell(0) != null) product.setName(currentRow.getCell(0).getStringCellValue());
//                if (currentRow.getCell(1) != null) product.setSku(currentRow.getCell(1).getStringCellValue());
//                if (currentRow.getCell(2) != null) product.setCategory(currentRow.getCell(2).getStringCellValue());
//                if (currentRow.getCell(3) != null) product.setBrand(currentRow.getCell(3).getStringCellValue());
//                if (currentRow.getCell(4) != null) product.setSellingPrice(currentRow.getCell(4).getNumericCellValue());
//                if (currentRow.getCell(5) != null) product.setStockQuantity((int) currentRow.getCell(5).getNumericCellValue());
//                if (currentRow.getCell(6) != null) product.setStatus(currentRow.getCell(6).getStringCellValue());
//
//                products.add(product);
//            }
//            // Database Bulk Save
//            productRepository.saveAll(products);
//        }
//    }
//
//    @Override
//    public ByteArrayInputStream exportProductsToExcel() throws IOException {
//        List<Product> products = productRepository.findAll();
//
//        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
//            Sheet sheet = workbook.createSheet("Products Catalogue");
//
//            // Header Row Setup
//            Row headerRow = sheet.createRow(0);
//            String[] columns = {"Product Name", "SKU", "Category", "Brand", "Price", "Stock", "Status"};
//
//            for (int i = 0; i < columns.length; i++) {
//                Cell cell = headerRow.createCell(i);
//                cell.setCellValue(columns[i]);
//            }
//
//            // Data Rows Setup
//            int rowIdx = 1;
//            for (Product product : products) {
//                Row row = sheet.createRow(rowIdx++);
//
//                row.createCell(0).setCellValue(product.getName());
//                row.createCell(1).setCellValue(product.getSku());
//                row.createCell(2).setCellValue(product.getCategory());
//                row.createCell(3).setCellValue(product.getBrand());
//                row.createCell(4).setCellValue(product.getSellingPrice());
//                row.createCell(5).setCellValue(product.getStockQuantity());
//                row.createCell(6).setCellValue(product.getStatus());
//            }
//
//            workbook.write(out);
//            return new ByteArrayInputStream(out.toByteArray());
//        }
//    }
//}

