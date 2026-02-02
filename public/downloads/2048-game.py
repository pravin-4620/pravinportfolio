import pygame
import random

pygame.init()

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (128, 128, 128)
LIGHT_GRAY = (200, 200, 200)

# Tile colors
TILE_COLORS = {
    0: (205, 193, 180),
    2: (238, 228, 218),
    4: (237, 224, 200),
    8: (242, 177, 121),
    16: (245, 149, 99),
    32: (246, 124, 95),
    64: (246, 94, 59),
    128: (237, 207, 114),
    256: (237, 204, 97),
    512: (237, 200, 80),
    1024: (237, 197, 63),
    2048: (237, 194, 46)
}

# Screen settings
WIDTH, HEIGHT = 500, 600
GRID_SIZE = 4
CELL_SIZE = 100
CELL_PADDING = 10
GRID_PADDING = 20

# Initialize screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("2048 Game")

# Fonts
font_large = pygame.font.Font(None, 50)
font_medium = pygame.font.Font(None, 36)
font_small = pygame.font.Font(None, 24)

class Game2048:
    def __init__(self):
        self.board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]
        self.score = 0
        self.game_over = False
        self.add_random_tile()
        self.add_random_tile()
    
    def add_random_tile(self):
        empty_cells = [(i, j) for i in range(GRID_SIZE) for j in range(GRID_SIZE) if self.board[i][j] == 0]
        if empty_cells:
            i, j = random.choice(empty_cells)
            self.board[i][j] = 2 if random.random() < 0.9 else 4
    
    def compress(self, board):
        new_board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]
        for i in range(GRID_SIZE):
            pos = 0
            for j in range(GRID_SIZE):
                if board[i][j] != 0:
                    new_board[i][pos] = board[i][j]
                    pos += 1
        return new_board
    
    def merge(self, board):
        for i in range(GRID_SIZE):
            for j in range(GRID_SIZE - 1):
                if board[i][j] == board[i][j + 1] and board[i][j] != 0:
                    board[i][j] *= 2
                    board[i][j + 1] = 0
                    self.score += board[i][j]
        return board
    
    def reverse(self, board):
        return [row[::-1] for row in board]
    
    def transpose(self, board):
        return [[board[j][i] for j in range(GRID_SIZE)] for i in range(GRID_SIZE)]
    
    def move_left(self):
        old_board = [row[:] for row in self.board]
        self.board = self.compress(self.board)
        self.board = self.merge(self.board)
        self.board = self.compress(self.board)
        return old_board != self.board
    
    def move_right(self):
        old_board = [row[:] for row in self.board]
        self.board = self.reverse(self.board)
        self.board = self.compress(self.board)
        self.board = self.merge(self.board)
        self.board = self.compress(self.board)
        self.board = self.reverse(self.board)
        return old_board != self.board
    
    def move_up(self):
        old_board = [row[:] for row in self.board]
        self.board = self.transpose(self.board)
        self.board = self.compress(self.board)
        self.board = self.merge(self.board)
        self.board = self.compress(self.board)
        self.board = self.transpose(self.board)
        return old_board != self.board
    
    def move_down(self):
        old_board = [row[:] for row in self.board]
        self.board = self.transpose(self.board)
        self.board = self.reverse(self.board)
        self.board = self.compress(self.board)
        self.board = self.merge(self.board)
        self.board = self.compress(self.board)
        self.board = self.reverse(self.board)
        self.board = self.transpose(self.board)
        return old_board != self.board
    
    def check_game_over(self):
        # Check for empty cells
        for i in range(GRID_SIZE):
            for j in range(GRID_SIZE):
                if self.board[i][j] == 0:
                    return False
        
        # Check for possible merges
        for i in range(GRID_SIZE):
            for j in range(GRID_SIZE - 1):
                if self.board[i][j] == self.board[i][j + 1]:
                    return False
        
        for i in range(GRID_SIZE - 1):
            for j in range(GRID_SIZE):
                if self.board[i][j] == self.board[i + 1][j]:
                    return False
        
        return True
    
    def check_win(self):
        for i in range(GRID_SIZE):
            for j in range(GRID_SIZE):
                if self.board[i][j] == 2048:
                    return True
        return False

def draw_board(game):
    screen.fill(WHITE)
    
    # Draw score
    score_text = font_medium.render(f"Score: {game.score}", True, BLACK)
    screen.blit(score_text, (20, 20))
    
    # Draw grid
    grid_y = 80
    for i in range(GRID_SIZE):
        for j in range(GRID_SIZE):
            x = GRID_PADDING + j * (CELL_SIZE + CELL_PADDING)
            y = grid_y + GRID_PADDING + i * (CELL_SIZE + CELL_PADDING)
            
            value = game.board[i][j]
            color = TILE_COLORS.get(value, TILE_COLORS[2048])
            
            pygame.draw.rect(screen, color, (x, y, CELL_SIZE, CELL_SIZE), border_radius=5)
            
            if value != 0:
                # Determine font size based on number of digits
                if value >= 1000:
                    tile_font = pygame.font.Font(None, 32)
                elif value >= 100:
                    tile_font = pygame.font.Font(None, 40)
                else:
                    tile_font = font_large
                
                text_color = BLACK if value <= 4 else WHITE
                text = tile_font.render(str(value), True, text_color)
                text_rect = text.get_rect(center=(x + CELL_SIZE // 2, y + CELL_SIZE // 2))
                screen.blit(text, text_rect)
    
    # Draw instructions
    instructions = font_small.render("Use arrow keys to play", True, GRAY)
    screen.blit(instructions, (WIDTH // 2 - instructions.get_width() // 2, HEIGHT - 40))
    
    # Draw game over or win message
    if game.game_over:
        overlay = pygame.Surface((WIDTH, HEIGHT))
        overlay.set_alpha(200)
        overlay.fill(WHITE)
        screen.blit(overlay, (0, 0))
        
        if game.check_win():
            message = "You Win!"
            color = (76, 175, 80)
        else:
            message = "Game Over!"
            color = (244, 67, 54)
        
        text = font_large.render(message, True, color)
        screen.blit(text, (WIDTH // 2 - text.get_width() // 2, HEIGHT // 2 - 60))
        
        restart_text = font_medium.render("Press R to Restart", True, BLACK)
        screen.blit(restart_text, (WIDTH // 2 - restart_text.get_width() // 2, HEIGHT // 2 + 20))
    
    pygame.display.flip()

def main():
    game = Game2048()
    clock = pygame.time.Clock()
    running = True
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            
            if event.type == pygame.KEYDOWN:
                if game.game_over and event.key == pygame.K_r:
                    game = Game2048()
                elif not game.game_over:
                    moved = False
                    if event.key == pygame.K_LEFT:
                        moved = game.move_left()
                    elif event.key == pygame.K_RIGHT:
                        moved = game.move_right()
                    elif event.key == pygame.K_UP:
                        moved = game.move_up()
                    elif event.key == pygame.K_DOWN:
                        moved = game.move_down()
                    
                    if moved:
                        game.add_random_tile()
                        if game.check_game_over():
                            game.game_over = True
                        elif game.check_win():
                            game.game_over = True
        
        draw_board(game)
        clock.tick(30)
    
    pygame.quit()

if __name__ == "__main__":
    main()
